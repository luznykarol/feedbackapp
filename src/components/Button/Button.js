import React from "react";

const Button = ({
  disabled,
  onClick,
  text = "Button",
  className = "purple",
}) => {
  const styles = `
  button button--${className}`;

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
