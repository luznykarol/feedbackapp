import React, { useState } from "react";

const Tag = ({ text = "Enhancement", value, onClick, selected }) => {
  return (
    <div className="tag">
      <input
        id={value}
        checked={selected === value}
        type="radio"
        value={value}
        name="category"
        onChange={onClick}
      />
      <label htmlFor={value}>{text}</label>
    </div>
  );
};

export default Tag;
