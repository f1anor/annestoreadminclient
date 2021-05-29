import React, { useEffect, useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";

const DropdownMenuContainer = ({ button, children, noScroll, ...props }) => {
  const title = useRef();
  const menu = useRef();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    if (!open) setOpen(true);
    else setOpen(false);
  };

  const handleClose = (e) => {
    const button = e.target.closest("button");

    if (!!button) {
      if (button === title.current) return;
    }

    setOpen(false);
  };

  // Закрываем меню при прокручивании скроллом
  const handleScrollClose = () => {
    setOpen(false);
  };

  const handleCancel = (e) => {
    if (e.keyCode !== 27) return;
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    window.addEventListener("keydown", handleCancel);
    if (!!noScroll) window.addEventListener("mousewheel", handleScrollClose);

    return () => {
      window.removeEventListener("click", handleClose);
      window.removeEventListener("keydown", handleCancel);
      if (!!noScroll)
        window.removeEventListener("mousewheel", handleScrollClose);
    };
  }, []);

  return (
    <DropdownMenu
      open={open}
      handleToggle={handleToggle}
      title={title}
      menu={menu}
      ref={title}
      button={button}
      children={children}
      noScroll={noScroll}
      {...props}
    />
  );
};

export default DropdownMenuContainer;
