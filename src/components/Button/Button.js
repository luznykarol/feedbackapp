import React from "react";
import Icon from "../Icon/Icon";
import { useNavigate } from "react-router-dom";

const Button = ({
  type = "button",
  disabled,
  onClick,
  text = "Button",
  color = "orange",
  className,
  icon,
}) => {
  const navigate = useNavigate();
  const styles = `button button--${color} ${className}`;

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <button
      type={type}
      className={styles}
      disabled={disabled}
      onClick={color === "transparent" ? handleNavigate : onClick}>
      {icon && <Icon className="button__icon" icon="votearrow" />}
      {text}
    </button>
  );
};

export default Button;
