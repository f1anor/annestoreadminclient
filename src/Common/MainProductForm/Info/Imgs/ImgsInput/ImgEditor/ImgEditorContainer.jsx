import React, { Component } from "react";
import { connect } from "react-redux";
import { change } from "redux-form";
import { getCoords } from "utils/utils";
import ImgEditor from "./ImgEditor";

class ImgEditorContainer extends Component {
  constructor(props) {
    super(props);

    this.configured = false;
    this.loaded = false;

    this.correctionX = 0;
    this.correctionY = 0;

    this.prevX = null;
    this.prevY = null;

    this.prevSizeX = null;
    this.prevSizeY = null;

    this.checkSizeTimer = null;

    this.handleChange({ width: 348, height: 348 });

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.handleZoomOut = this.handleZoomOut.bind(this);
    this.handleZoomIn = this.handleZoomIn.bind(this);
    this.handleStopCheckSize = this.handleStopCheckSize.bind(this);
    this.clear = this.clear.bind(this);
    this.handleMoveLeft = this.handleMoveLeft.bind(this);
    this.handleMoveRight = this.handleMoveRight.bind(this);

    // this.handleSuccess = this.handleSuccess.bind(this);
  }

  handleMoveLeft() {
    const { value, element, change, form, name } = this.props;
    const index = value.findIndex((item) => item.id === element.id);

    if (!index || index === 0) return;

    const prevEl = value[index - 1];
    const prevId = prevEl.id;

    change(form, name, [
      ...value.filter((item) => item.id !== prevId && item.id !== element.id),
      {
        ...prevEl,
        id: element.id,
      },
      {
        ...element,
        id: prevId,
      },
    ]);
  }

  handleMoveRight() {
    const { value, element, change, form, name } = this.props;
    const index = value.findIndex((item) => item.id === element.id);

    if (index === value.length - 1) return;

    const nextEl = value[index + 1];
    const nextId = nextEl.id;

    change(form, name, [
      ...value.filter((item) => item.id !== nextId && item.id !== element.id),
      {
        ...nextEl,
        id: element.id,
      },
      {
        ...element,
        id: nextId,
      },
    ]);
  }

  handleChange(prop, val, clear) {
    const { change, value, form, name, element } = this.props;
    console.log(11111, prop, value);
    if (!!clear) {
      change(form, name, [...value.filter((item) => item.id !== element.id)]);
    } else if (typeof prop === "object") {
      change(form, name, [
        ...value.filter((item) => item.id !== element.id),
        { ...element, ...prop },
      ]);
    } else {
      change(form, name, [
        ...value.filter((item) => item.id !== element.id),
        { ...element, [prop]: val },
      ]);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!this.configured && this.img) {
      let orientation = "";
      const img = this.img.querySelector("img");
      img.onload = () => {
        if (img.offsetWidth / img.offsetHeight > 1) {
          orientation = "landscape";
        } else {
          orientation = "portrait";
        }

        this.configured = true;

        this.handleChange({
          orientation: orientation,
          width: 348,
          height: 348,
        });
        const self = this;
        setTimeout(() => {
          if (!!self.configured && !self.loaded) {
            self.loaded = true;
            self.getMiddleCorrectionSize();
            self.handleChange({
              x: parseInt(Math.abs(self.correctionX)),
              y: parseInt(Math.abs(self.correctionY)),
            });
          }
        }, 1);
      };
    }

    if (nextProps === this.props && this.state === nextState) return false;
    return true;
  }

  getCoords() {
    const img = this.img.querySelector("img");
    return getCoords(img);
  }

  getMiddleCorrectionSize() {
    const { width, height } = this.props;
    const coords = this.getCoords();
    this.correctionX = -(coords.width / 2 - width / 2);
    this.correctionY = -(coords.height / 2 - height / 2);
  }

  handleZoomOut() {
    const { element } = this.props;
    const { zoom = 1 } = element;
    const nextStep = zoom - 0.1;
    if (nextStep < 1) return;
    this.handleChange("zoom", nextStep);

    const img = this.img.querySelector("img");
    const coords = getCoords(img);
    this.prevSizeX = coords.width;
    this.prevSizeY = coords.height;

    this.getMiddleCorrectionSize();

    this.checkSizeStart();
  }

  handleZoomIn() {
    const { element } = this.props;
    const { zoom = 1 } = element;
    const nextStep = zoom + 0.1;
    if (nextStep > 2) return;

    this.handleChange("zoom", nextStep);

    const coords = this.getCoords();
    this.prevSizeX = coords.width;
    this.prevSizeY = coords.height;

    this.getMiddleCorrectionSize();

    this.checkSizeStart();
  }

  checkSizeStart() {
    this.handleStopCheckSize();
    const self = this;
    this.checkSizeTimer = setTimeout(() => {
      const coords = this.getCoords();

      this.getMiddleCorrectionSize();
      self.correctXYposition(coords);
      self.checkSizeStart();
      self.prevSizeX = coords.width;
      self.prevSizeY = coords.height;
    }, 10);
  }

  handleStopCheckSize() {
    clearTimeout(this.checkSizeTimer);
    this.checkSizeTimer = null;
  }

  correctXYposition(coords) {
    const { element, width, height } = this.props;
    const { currentX = 0, currentY = 0 } = element;

    if (currentX < -(coords.width - width)) {
      this.handleChange({
        currentX: -(coords.width - width),
        x: parseInt(Math.abs((coords.width - width) / 2 - this.correctionX)),
      });
    }
    if (currentX + this.correctionX * 2 >= 0) {
      this.handleChange({
        currentX: -this.correctionX * 2,
        x: this.correctionX,
      });
    }
    if (currentY < -(coords.height - height)) {
      this.handleChange({
        currentY: -(coords.height - height),
        y: parseInt(Math.abs((coords.height - height) / 2 - this.correctionY)),
      });
    }
    if (currentY + this.correctionY * 2 >= 0) {
      this.handleChange({
        currentY: -this.correctionY * 2,
        y: this.correctionY,
      });
    }
  }

  handleMouseDown(event) {
    event.preventDefault();
    this.prevX = event.clientX;
    this.prevY = event.clientY;

    const self = this;

    document.body.addEventListener("mousemove", this.mouseMove);
    document.body.addEventListener("mouseup", () => {
      document.body.removeEventListener("mousemove", self.mouseMove);
    });
  }

  mouseMove(event) {
    const { element } = this.props;
    const { currentX = 0, currentY = 0 } = element;

    const x = event.clientX - this.prevX;
    const y = event.clientY - this.prevY;

    if (x < 0) this.incX(x, currentX);
    if (x > 0) this.decX(x, currentX);
    if (y < 0) this.incY(y, currentY);
    if (y > 0) this.decY(y, currentY);

    this.prevX = event.clientX;
    this.prevY = event.clientY;
  }

  incX(x, currentX) {
    const { width } = this.props;
    const nextPosition = currentX + x;
    const coords = this.getCoords();
    if (nextPosition < -(coords.width - width)) return;
    this.handleChange({
      currentX: nextPosition,
      x: Math.round(Math.abs(nextPosition / 2 + this.correctionX)),
    });
  }

  decX(x, currentX) {
    const nextPosition = currentX + x;
    if (nextPosition + this.correctionX * 2 >= 0) return;

    this.handleChange({
      currentX: nextPosition,
      x: Math.round(Math.abs(nextPosition / 2 + this.correctionX)),
    });
  }

  incY(y, currentY) {
    const { height } = this.props;
    const nextPosition = currentY + y;
    const coords = this.getCoords();
    if (nextPosition < -(coords.height - height)) return;

    this.handleChange({
      currentY: nextPosition,
      y: Math.round(Math.abs(nextPosition / 2 + this.correctionY)),
    });
  }

  decY(y, currentY) {
    const nextPosition = currentY + y;
    if (nextPosition + this.correctionY * 2 >= 0) return;

    this.handleChange({
      currentY: nextPosition,
      y: Math.round(Math.abs(nextPosition / 2 + this.correctionY)),
    });
  }

  clear() {
    this.handleChange(null, null, true);
  }
  // ?${Math.random()}
  render() {
    const { width, height, element } = this.props;
    return (
      <div ref={(item) => (this.img = item)}>
        <ImgEditor
          img={`${process.env.REACT_APP_SERVER_ASSETS}${element.preloadImg}`}
          width={width}
          height={height}
          orientation={element.orientation}
          currentX={element.currentX}
          currentY={element.currentY}
          zoom={element.zoom}
          handleMouseDown={this.handleMouseDown}
          handleZoomOut={this.handleZoomOut}
          handleZoomIn={this.handleZoomIn}
          handleStopCheckSize={this.handleStopCheckSize}
          clear={this.clear}
          handleMoveLeft={this.handleMoveLeft}
          handleMoveRight={this.handleMoveRight}
        />
      </div>
    );
  }
}

const mapDispatchToProps = { change };

export default connect(null, mapDispatchToProps)(ImgEditorContainer);
