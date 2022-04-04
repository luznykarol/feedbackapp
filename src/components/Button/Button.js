import React from "react";

const Button = ({
  disabled,
  onClick,
  text = "Button",
  type = "orange",
  className,
}) => {
  const styles = `
  button button--${type} ${className}`;

  return (
    <button
      type="button"
      className={styles}
      disabled={disabled}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
