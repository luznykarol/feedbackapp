import React from "react";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

const TopBar = ({ suggestions, buttonText, buttonType }) => {
  return (
    <div className="top-bar">
      <div className="top-bar__left">
        <Icon icon="bulb" />
      </div>
      <Button type={buttonType} text={buttonText} />
    </div>
  );
};

export default TopBar;
