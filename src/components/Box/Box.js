import React from "react";
import Icon from "../Icon/Icon";

const Box = ({ children, className, icon, onClick, variant = "medium" }) => {
  const combineClass = `box ${className} ${variant}`;

  return (
    <div onClick={onClick} className={combineClass}>
      {icon && (
        <div className="box__icon">
          <Icon className={icon && icon} icon={icon} />
        </div>
      )}
      {children}
    </div>
  );
};

export default Box;
