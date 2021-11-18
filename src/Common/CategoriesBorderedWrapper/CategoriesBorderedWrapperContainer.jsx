import { setCatPosition } from "actions/cat-actions";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { getCoords, useQuery } from "utils/utils";
import CategoriesBorderedWrapper from "./CategoriesBorderedWrapper";
import css from "./CategoriesBorderedWrapper.module.css";

const CategoriesBorderedWrapperContainer = ({ marker, ...props }) => {
  //Блок переменных для DnD
  let startPosition = null; // Номер начального положения перетаскиваемого объекта
  let startY = null; // Координаты первого нажатия на кнопку мыши
  let startTarget = null; // Перетаскиваемый объект
  let startTargetPhantom = null; // Дополнительный блок расширения
  let currentTarget = null; // Текущая цель под курсором при переносе
  let prevCurrentTarget = null; // Предыдущая цель под курсором при переносе
  let avatar = null; // Аватар перетаскиваемого объекта
  let shiftX = null; // Смещение по x относительно перетаскиваемого объекта
  let shiftY = null; // Смещение по y относительно перетаскиваемого объекта
  //

  const dispatch = useDispatch();
  const query = useQuery().toString();
  const dragWrapper = useRef();

  // При загрузке компонента - устанавливаем обработчик mousedown
  useEffect(() => {
    if (!dragWrapper.current) return;

    window.addEventListener("mousedown", handleMouseDown);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  });

  // Удаляем отступы
  const removeMargin = () => {
    Array.from(
      dragWrapper.current.querySelectorAll("div[data-position")
    ).forEach((item) => {
      item.classList.remove(css.move);
    });
  };

  // Непосредственно перемещение объекта по экарану
  const moveAt = (x, y) => {
    if (!avatar) return;
    const coords = getCoords(dragWrapper.current);

    // Ограничения перемещения по высоте контейнера
    if (y + 80 - shiftY < coords.top - 80) return;
    if (y - shiftY > coords.top + coords.height - 70) return;

    if (!!x) avatar.style.left = x + "px";
    if (!!y) avatar.style.top = y + "px";
  };

  // Создание аватара для перемещения
  const createAvatar = (target, pageX, pageY) => {
    // Проверяем наличие флага того что объект перетаскиваемый
    startTarget = target.closest("div[data-dragndrop");
    if (!startTarget) return;

    // Проверяем если в нем фантом. Если есть - вытаскиваем у него данные о
    // текущей позиции и записываем в глобальную переменную и прячем фантом
    startTargetPhantom = startTarget.querySelector("div[data-position");
    if (!startTargetPhantom) return;
    startPosition = startTargetPhantom.getAttribute("data-position");
    startTargetPhantom.hidden = "true";

    // Копируем изначальный объект и записываем его в глобальную переменную
    avatar = startTarget.cloneNode(true);
    avatar.classList.add(css.avatar);

    // Прячем начальный объект. он нам пока что не нужен
    startTarget.hidden = "true";

    // Вставляем аватар в body
    document.body.appendChild(avatar);

    avatar.style.left = pageX - shiftX + "px";
    avatar.style.top = pageY - shiftY + "px";
  };

  // Обработка отпускания лкм если нужно совершить перемещение
  const stopDragSuccess = () => {
    let finishPosition = currentTarget.getAttribute("data-position");

    // Если двигаем сверху вниз то отнимаем единицу у финишной позиции
    if (+startPosition < +finishPosition) finishPosition--;

    dispatch(setCatPosition(startPosition, finishPosition, query));
    avatar.remove();
    removeMargin();
  };

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

    startY = e.pageY;

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMove = (e) => {
    if (!e.buttons) return;
    // Если нет аватара - создаем его и вставляем в body
    // с учетом положения курсора над оригиналом
    if (!avatar && Math.abs(startY - e.pageY) > 5)
      createAvatar(e.target, e.pageX, e.pageY);

    // Если не получилось создать аватар - вообще больше ничего не делаем
    if (!avatar) return;

    // Здесь двигаем аватар по оси Y
    moveAt(null, e.pageY - shiftY);

    // Проверяем что находится под перетаскиваемым объектом
    // Для этого на время прячем его и показываем снова
    avatar.hidden = true;

    currentTarget = document
      .elementFromPoint(e.clientX, e.clientY)
      .closest("div[data-position");
    avatar.hidden = false;

    if (!!currentTarget && currentTarget !== prevCurrentTarget) {
      removeMargin();
      currentTarget.classList.add(css.move);
    }

    prevCurrentTarget = currentTarget;
  };

  // Обрабатываем отпускание кнопки мышы
  const handleMouseUp = (e) => {
    if (!!avatar) {
      if (!!currentTarget) {
        stopDragSuccess();
        currentTarget.hidden = true;
        setTimeout(() => {
          currentTarget.hidden = false;
          currentTarget = null;
        }, 1);
      }

      avatar && avatar.remove();
      removeMargin();
      startTarget.hidden = false;
      startTargetPhantom.hidden = false;
    }

    startY = null;
    startTarget = null;
    startTargetPhantom = null;
    prevCurrentTarget = null;
    avatar = null;
    shiftX = null;
    shiftY = null;

    window.removeEventListener("mousemove", handleMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <CategoriesBorderedWrapper ref={dragWrapper} marker={marker} {...props} />
  );
};
export default CategoriesBorderedWrapperContainer;
