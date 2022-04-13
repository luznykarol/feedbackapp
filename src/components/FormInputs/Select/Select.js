import React, { useState } from "react";

const Select = ({ id, title, description, options, onChange }) => {
  return (
    <>
      <select className="select" name={id} id={id} onChange={onChange}>
        {options.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
    </>
  );
};

export default Select;
