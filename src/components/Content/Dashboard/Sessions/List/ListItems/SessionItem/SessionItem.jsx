import React from "react";
import css from "./SessionItem.module.css";

const SessionItem = ({ session }) => {
  let type = "Гость";

  if (session.type === 1) type = "Пользователь";
  if (session.type === 2) type = "Админинстратор";
  return (
    <tr>
      <td className={css.center}>
        {session.date ? new Date(session.date).toLocaleString("ru") : "-"}
      </td>
      <td className={css.center}>{type}</td>
      <td className={css.center}>
        {!!session.referrer ? session.referrer : "нет данных"}
      </td>
      <td className={css.center}>
        {!!session.platform ? session.platform : "нет данных"}
      </td>
    </tr>
  );
};

export default SessionItem;
