import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const TopBar = ({ type, children, buttonText, buttonColor }) => {
  const navigate = useNavigate();

  return (
    <div className={`top-bar top-bar__${type}`}>
      <div className="top-bar__left">{children}</div>
      <Button
        onClick={() => navigate("/add-feedback")}
        color={buttonColor}
        text={buttonText}
      />
    </div>
  );
};

export default TopBar;
