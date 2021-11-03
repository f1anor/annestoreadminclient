import {
  clearCommentsToScrollPage,
  fetchCommentsToScrollPage,
} from "actions/comments-actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommentsForScrollById,
  getCommentsScrollFull,
  getCurrentScrollPage,
  getIsCommentsForScrollFetching,
} from "selectors/comments-selectors";
import Comments from "./Comments";

const CommentsContainer = React.memo(({ commentsID, globalWrapper }) => {
  let timer = null;
  const dispatch = useDispatch();

  const comments = useSelector((state) => getCommentsForScrollById(state));
  const page = useSelector((state) => getCurrentScrollPage(state));
  const isFetching = useSelector((state) =>
    getIsCommentsForScrollFetching(state)
  );
  const full = useSelector((state) => getCommentsScrollFull(state));

  // Вешаем обработчик события скролл на главный контейнер модального окна
  useEffect(() => {
    const target = globalWrapper.current;
    target.addEventListener("scroll", handleUpdateComments);
    return () => {
      target.removeEventListener("scroll", handleUpdateComments);
    };
  });

  // Используем троттлинг. Для того чтобы запросы на севрвер не оправлялись слишком часто
  const handleUpdateComments = (e) => {
    clearTimeout(timer);
    timer = null;

    timer = setTimeout(() => update(e), 1000);
  };

  // Проверяем, находимся ли мы в самом низу. И не является ли список уже полным. Потом подгружаем следующую порцию.
  const update = (e) => {
    const { target } = e;
    if (!!isFetching || !!full) return;
    if (target.scrollHeight - (target.scrollTop + target.clientHeight) < 100) {
      dispatch(fetchCommentsToScrollPage(commentsID, `page=${page}`));
    }
  };

  useEffect(() => {
    dispatch(clearCommentsToScrollPage());
    dispatch(fetchCommentsToScrollPage(commentsID, "page=1&size=10"));
  }, [dispatch, commentsID]);

  return (
    <>
      {!!comments && comments.length > 0 && (
        <Comments comments={comments} isFetching={isFetching} />
      )}
    </>
  );
});

export default CommentsContainer;
