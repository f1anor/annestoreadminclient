import React from "react";
import { Button, ButtonGroup, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import css from "./Type.module.css";

const Type = ({ counts, currentStatus, status }) => {
  return (
    <ButtonGroup className="mt-5">
      <Button
        size="sm"
        className="m-0 p-0"
        variant={
          currentStatus === "all" || currentStatus === null
            ? "primary"
            : "outline-primary"
        }
      >
        <Link to={status.all} className={css.link}>
          Все
          <Badge
            className="ml-2"
            variant={
              currentStatus === "all" || currentStatus === null
                ? "light"
                : "primary"
            }
          >
            {counts.total || 0}
          </Badge>
        </Link>
      </Button>

      <Button
        className="m-0 p-0"
        size="sm"
        variant={currentStatus === "new" ? "info" : "outline-info"}
      >
        <Link to={status.new} className={css.link}>
          Новые
          <Badge
            className="ml-2"
            variant={currentStatus === "new" ? "light" : "info"}
          >
            {counts.new || 0}
          </Badge>
        </Link>
      </Button>

      <Button
        className="m-0 p-0"
        size="sm"
        variant={currentStatus === "process" ? "warning" : "outline-warning"}
      >
        <Link to={status.process} className={css.link}>
          В обработке
          <Badge
            className="ml-2"
            variant={currentStatus === "process" ? "light" : "warning"}
          >
            {counts.process || 0}
          </Badge>
        </Link>
      </Button>

      <Button
        className="m-0 p-0"
        size="sm"
        variant={currentStatus === "warning" ? "danger" : "outline-danger"}
      >
        <Link to={status.warning} className={css.link}>
          Проблемные
          <Badge
            className="ml-2"
            variant={currentStatus === "warning" ? "light" : "danger"}
          >
            {counts.warning || 0}
          </Badge>
        </Link>
      </Button>

      <Button
        className="m-0 p-0"
        size="sm"
        variant={currentStatus === "success" ? "success" : "outline-success"}
      >
        <Link to={status.success} className={css.link}>
          Ожидают самовывоза
          <Badge
            className="ml-2"
            variant={currentStatus === "success" ? "light" : "success"}
          >
            {counts.success || 0}
          </Badge>
        </Link>
      </Button>

      <Button
        className="m-0 p-0"
        size="sm"
        variant={
          currentStatus === "completed" ? "secondary" : "outline-secondary"
        }
      >
        <Link to={status.completed} className={css.link}>
          Завершенные
          <Badge
            className="ml-2"
            variant={currentStatus === "completed" ? "light" : "secondary"}
          >
            {counts.completed || 0}
          </Badge>
        </Link>
      </Button>

      <Button
        className="m-0 p-0"
        size="sm"
        variant={currentStatus === "deleted" ? "dark" : "outline-dark"}
      >
        <Link to={status.deleted} className={css.link}>
          Удаленные
          <Badge
            className="ml-2"
            variant={currentStatus === "deleted" ? "light" : "dark"}
          >
            {counts.deleted || 0}
          </Badge>
        </Link>
      </Button>
    </ButtonGroup>
  );
};

export default Type;
