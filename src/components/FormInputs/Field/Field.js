import React from "react";

const Field = ({ title, description, children }) => {
  return (
    <div className="field">
      <div className="field__info">
        <div className="field__info__title">{title}</div>
        <div className="field__info__description">{description}</div>
      </div>
      {children}
    </div>
  );
};

export default Field;
