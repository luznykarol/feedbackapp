import React from "react";

const Tag = ({
  fixed = false,
  text = "Enhancement",
  value,
  onChange,
  selected,
  className,
}) => {
  return fixed ? (
    <div className={`tag--fixed tag--fixed__${className}`}>{text}</div>
  ) : (
    <div className="tag">
      <input
        id={value}
        checked={selected === value}
        type="radio"
        value={value}
        name="category"
        onChange={onChange}
      />
      <label htmlFor={value}>{text}</label>
    </div>
  );
};

export default Tag;
