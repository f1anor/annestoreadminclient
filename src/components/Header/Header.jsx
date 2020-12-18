import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import css from "./Header.module.css";

const Header = ({ signOut }) => {
  return (
    <div>
      <nav className="navbar sticky-top bg-secondary flex-md-nowrap p-0 shadow">
        <Link to="/dashboard" className={[css.navbarBrand].join(" ")}>
          Админ
        </Link>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          className={[css.formControl, css.formControlDark, "w-100"].join(" ")}
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <Button variant="" className={css.logoutBtn} onClick={signOut}>
              Выйти
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
