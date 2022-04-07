import React from "react";
import Icon from "../Icon/Icon";

const Button = ({
  disabled,
  onClick,
  text = "Button",
  color = "orange",
  className,
  icon,
}) => {
  const styles = `button button--${color} ${className}`;

  return (
    <button
      type="button"
      className={styles}
      disabled={disabled}
      onClick={onClick}>
      {icon && <Icon className="button__icon" icon="votearrow" />}
      {text}
    </button>
  );
};

export default Button;
