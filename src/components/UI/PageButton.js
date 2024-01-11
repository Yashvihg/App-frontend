import React from "react";
import classes from "./PageButton.module.css";

function PageButton(props) {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default PageButton;
