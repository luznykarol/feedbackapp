import React from "react";

const Template = ({ children, className }) => {
  return <div className={`template template__${className}`}>{children}</div>;
};

export default Template;
