import React from "react";

const Burger = ({ onClick, navActive }) => {
  return (
    <button
      onClick={onClick}
      className={navActive ? "nav__burger nav__burger--active" : "nav__burger"}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default Burger;
