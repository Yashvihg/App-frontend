import React from "react";
// import { IconName } from "react-icons/fa";
import { WiDayHail } from "react-icons/wi";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/login");
  };
  return (
    <header className="navbar">
      <WiDayHail fontSize={"6rem"} className="rahat-logo" />
      <button className="login-button" onClick={onClickHandler}>
        Login
      </button>
    </header>
  );
}

export default Header;
