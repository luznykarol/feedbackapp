import React, { useState } from "react";

const Tag = ({ text = "Enhancement", value, onChange, selected }) => {
  return (
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
