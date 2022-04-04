import React from "react";

const Input = ({ error, onChange, id, placeholder }) => {
  return (
    <div className="field">
      <input
        onChange={onChange}
        className={error ? "input input__error" : "input"}
        name={id}
        id={id}
        type="text"
        placeholder={placeholder}
      />
      {error && <span className="input__error__message">{error}</span>}
    </div>
  );
};

export default Input;
