import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAva, getName } from "selectors/auth-selectors";
import { signOut } from "actions/auth-actions";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(true);

  const pathName = useLocation().pathname.slice(1).split("/")[0];

  useEffect(() => {
    setDisplay(true);
  }, [pathName]);

  useEffect(() => {
    const scrollWrapper = document.querySelector("div[data-scroll=true]");

    if (!scrollWrapper) return;
    scrollWrapper.addEventListener("scroll", handleControlHeader);
    return () => {
      scrollWrapper.removeEventListener("scroll", handleControlHeader);
    };
  });

  const handleControlHeader = (e) => {
    const scrollWrapper = document.querySelector("div[data-scroll=true]");
    if (!!display && scrollWrapper.scrollTop > 55) setDisplay(false);
    else if (!display && scrollWrapper.scrollTop <= 55) setDisplay(true);
  };

  const ava = useSelector((state) => getAva(state));
  const name = useSelector((state) => getName(state));

  const handleSigneOut = () => {
    dispatch(signOut());
  };

  return (
    <Header
      handleSigneOut={handleSigneOut}
      display={display}
      ava={ava}
      name={name}
    />
  );
};

export default HeaderContainer;
