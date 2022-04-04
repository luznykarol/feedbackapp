import React from "react";
import Button from "../Button/Button";

const TopBar = ({ type, children, buttonText, buttonType }) => {
  return (
    <div className={`top-bar top-bar__${type}`}>
      <div className="top-bar__left">{children}</div>
      <Button type={buttonType} text={buttonText} />
    </div>
  );
};

export default TopBar;
