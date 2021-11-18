import React, { useEffect, useRef } from "react";
import { getCoords } from "utils/utils";
import css from "./DragndropWrapper.module.css";

const DragndropWrapper = ({ children, handleMoveSuccess, ...props }) => {
  //Блок переменных для DnD
  let startX = null; // Координаты первого нажатия на кнопку мыши
  let startY = null; // Координаты первого нажатия на кнопку мыши
  let startTarget = null; // Перетаскиваемый объект
  let currentTarget = null; // Текущая цель под курсором при переносе
  let avatar = null; // Аватар перетаскиваемого объекта
  let shiftX = null; // Смещение по x относительно перетаскиваемого объекта
  let shiftY = null; // Смещение по y относительно перетаскиваемого объекта
  //

  const dragWrapper = useRef();

  // -------------------

  // При загрузке компонента - устанавливаем обработчик mousedown
  useEffect(() => {
    if (!dragWrapper.current) return;

    window.addEventListener("mousedown", handleMouseDown);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  });

  // Создание аватара для перемещения
  const createAvatar = (pageX, pageY) => {
    // Копируем изначальный объект и записываем его в глобальную переменную
    avatar = startTarget.cloneNode(true);
    avatar.classList.add(css.avatar);

    // Прячем начальный объект. он нам пока что не нужен
    startTarget.hidden = "true";
    dragWrapper.current.dataset.marker = "inDrag";

    // Вставляем аватар в body
    document.body.appendChild(avatar);

    avatar.style.left = pageX - shiftX + "px";
    avatar.style.top = pageY - shiftY + "px";
  };

  // Непосредственно перемещение объекта по экарану
  const moveAt = (x, y) => {
    if (!avatar) return;

    if (!!x) avatar.style.left = x + "px";
    if (!!y) avatar.style.top = y + "px";
  };

  // Убираем рамку
  const clearSelection = () => {
    dragWrapper.current
      .querySelectorAll("div[data-dragndrop]")
      .forEach((item) => item.classList.remove(css.target));
  };

  // Обработка отпускания лкм если нужно совершить перемещение
  const stopDragSuccess = () => {
    handleMoveSuccess(
      startTarget.dataset.dragndrop,
      currentTarget.dataset.dragndrop
    );
  };

  //----------------------

  // Нажатие на лкм
  const handleMouseDown = (e) => {
    const { target } = e;
    const closestTarget = target.closest("div[data-dragndrop]");
    if (!closestTarget) return;
    const parent = closestTarget.closest("div[data-marker]");
    if (parent === dragWrapper.current) startTarget = closestTarget;
    if (!startTarget) return;

    const coords = getCoords(startTarget);

    shiftX = e.clientX - coords.left;
    shiftY = e.clientY - coords.top;

    startX = e.pageX;
    startY = e.pageY;

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMove = (e) => {
    if (!e.buttons) return;
    // Если нет аватара - создаем его и вставляем в body
    // с учетом положения курсора над оригиналом
    if (
      !avatar &&
      Math.max((Math.abs(startY - e.pageY) > 5, Math.abs(startX - e.pageX) > 5))
    ) {
      createAvatar(e.target, e.clientX, e.clientY);
    }

    // Если не получилось создать аватар - вообще больше ничего не делаем
    if (!avatar) return;
    // Здесь двигаем аватар по оси Y
    moveAt(e.pageX - shiftX, e.pageY - shiftY);

    // Проверяем что находится под перетаскиваемым объектом
    // Для этого на время прячем его и показываем снова
    avatar.hidden = true;

    currentTarget = document
      .elementFromPoint(e.clientX, e.clientY)
      .closest("div[data-dragndrop]");

    if (!!currentTarget) {
      clearSelection();
      currentTarget.classList.add(css.target);
    }
    avatar.hidden = false;
  };

  // Обрабатываем отпускание кнопки мышы
  const handleMouseUp = (e) => {
    if (!!avatar) {
      if (!!currentTarget) {
        stopDragSuccess();
        // currentTarget.hidden = true;
      }

      avatar && avatar.remove();
      startTarget.hidden = false;
    }
    dragWrapper.current.dataset.marker = "true";
    clearSelection();

    startY = null;
    startX = null;
    startTarget = null;
    avatar = null;
    shiftX = null;
    shiftY = null;

    window.removeEventListener("mousemove", handleMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div ref={dragWrapper} data-marker="true">
      {children}
    </div>
  );
};
export default DragndropWrapper;
