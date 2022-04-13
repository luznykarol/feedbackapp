import React from "react";

const TextInput = ({
  error,
  onChange,
  id,
  placeholder,
  textArea,
  required = true,
}) => {
  return (
    <>
      {textArea ? (
        <>
          <textarea
            onChange={onChange}
            required={required}
            className={error ? "textarea textarea__error" : "textarea"}
            name={id}
            id={id}
            type="text"
            placeholder={placeholder}
          />
        </>
      ) : (
        <>
          <input
            required={required}
            onChange={onChange}
            className={error ? "input input__error" : "input"}
            name={id}
            id={id}
            type="text"
            placeholder={placeholder}
          />
          {error && <span className="input__error__message">{error}</span>}
        </>
      )}
    </>
  );
};

export default TextInput;
