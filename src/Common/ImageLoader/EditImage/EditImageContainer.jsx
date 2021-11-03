import React, { Component } from "react";
import { connect } from "react-redux";
import { change } from "redux-form";
import { getCoords } from "utils/utils";
import EditImage from "./EditImage";

class EditImageContainer extends Component {
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

    const { width, height } = this.props;
    this.handleChange({
      width: width,
      height: height,
      orientation: false,
      currentX: 0,
      currentY: 0,
      x: 0,
      y: 0,
      zoom: 1,
    });

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
    this.handleZoomOut = this.handleZoomOut.bind(this);
    this.handleZoomIn = this.handleZoomIn.bind(this);
    this.handleStopCheckSize = this.handleStopCheckSize.bind(this);
    this.clear = this.clear.bind(this);

    // this.handleSuccess = this.handleSuccess.bind(this);
  }

  handleChange(prop, val, clear) {
    const { change, input, form } = this.props;
    const { value, name } = input;
    if (!!clear) {
      change(form, name, {});
    } else if (typeof prop === "object") {
      change(form, name, { ...value, ...prop });
    } else {
      change(form, name, { ...value, [prop]: val });
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
        this.handleChange("orientation", orientation);
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
    const { input } = this.props;
    const { zoom = 1 } = input.value;
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
    const { input } = this.props;
    const { zoom = 1 } = input.value;
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
    const { input, width, height } = this.props;
    const { currentX = 0, currentY = 0 } = input.value;

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
    const { input } = this.props;
    const { currentX = 0, currentY = 0 } = input.value;

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

  render() {
    const { input, img, width, height } = this.props;
    const { value } = input;
    return (
      <div ref={(item) => (this.img = item)}>
        <EditImage
          img={img}
          width={width}
          height={height}
          orientation={value.orientation}
          currentX={value.currentX}
          currentY={value.currentY}
          zoom={value.zoom}
          handleMouseDown={this.handleMouseDown}
          handleZoomOut={this.handleZoomOut}
          handleZoomIn={this.handleZoomIn}
          handleStopCheckSize={this.handleStopCheckSize}
          clear={this.clear}
        />
      </div>
    );
  }
}

const mapDispatchToProps = { change };

export default connect(null, mapDispatchToProps)(EditImageContainer);
