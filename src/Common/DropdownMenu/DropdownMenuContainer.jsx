import React, { Component } from "react";
import DropdownMenu from "./DropdownMenu";
import css from "./DropdownMenu.module.css";

class DropdownMenuContainer extends Component {
  constructor(props) {
    super(props);

    this.title = React.createRef();
    this.menu = React.createRef();

    this.state = {
      open: false,
      x: null,
      y: null,
    };

    this.handleSetOpen = this.handleSetOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

    document.addEventListener("click", this.handleClose);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClose);
  }

  handleClose(e) {
    if (!this.menu.current) return;

    const button = e.target.closest("button");

    if (!!button) {
      if (button === this.title.current) return;
    }

    this.setState({
      open: false,
    });
  }

  handleSetOpen() {
    this.setState({
      open: !this.state.open,
    });
  }

  setDirection(dir) {
    switch (dir) {
      case "center":
        return css.center;
      case "left":
        return css.left;
      case "right":
        return css.right;
      default:
        return css.center;
    }
  }

  render() {
    const { open } = this.state;
    const { button, children, dir } = this.props;
    const direction = this.setDirection(dir);
    return (
      <DropdownMenu
        open={open}
        handleSetOpen={this.handleSetOpen}
        title={this.title}
        menu={this.menu}
        button={button}
        children={children}
        direction={direction}
      />
    );
  }
}

export default DropdownMenuContainer;
