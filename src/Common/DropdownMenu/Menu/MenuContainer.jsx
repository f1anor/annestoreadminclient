import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import { getCoords } from "utils/utils";

const MenuContainer = ({ title, menu, ...props }) => {
  const [posx, setPosx] = useState(false);
  const [posy, setPosy] = useState(false);

  useEffect(() => {
    let timeout = null;

    const checkCoords = () => {
      clearTimeout(timeout);
      timeout = null;
      correctCoords();
      timeout = setTimeout(correctCoords, 20);
    };

    const correctCoords = () => {
      let coords = getCoords(title.current);

      // Отступ от правой границы экрана: координаты от правой границы экрана до кнопки + ширина кнопки - ширина меню + 10px
      const marginRightToMenu =
        coords.right + coords.width - menu.current.offsetWidth + 10;

      // Отступ от нижней границы экрана: координаты от нижней границы экрана до кнопки - 20px - высота меню
      const marginBottomToMenu = coords.bottom - 20 - menu.current.offsetHeight;

      setPosx(
        marginRightToMenu > 0
          ? coords.left - 10
          : coords.left -
              (menu.current.offsetWidth - title.current.offsetWidth - 10)
      );

      setPosy(
        marginBottomToMenu > 0
          ? coords.top + coords.height + 20
          : coords.top - menu.current.offsetHeight - 20
      );
    };

    window.addEventListener("mousewheel", checkCoords);
    correctCoords();

    return () => {
      window.removeEventListener("mousewheel", checkCoords);
    };
  }, [setPosx, setPosy, menu, title]);

  return <Menu ref={menu} posx={posx} posy={posy} {...props} />;
};
export default MenuContainer;
