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
    window.addEventListener("scroll", handleControlHeader);
    return () => {
      window.removeEventListener("scroll", handleControlHeader);
    };
  });

  const handleControlHeader = () => {
    if (!!display && document.documentElement.scrollTop > 30) setDisplay(false);
    else if (!display && document.documentElement.scrollTop <= 30)
      setDisplay(true);
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
