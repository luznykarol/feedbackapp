import React from "react";

const Card = ({ color = "orange" }) => {
  return (
    <article className={`card card--${color}`}>
      <p>asaqwe qweqwe qwesadqwe qwe qweqwadsadqwe qewqw q weqwe q</p>
    </article>
  );
};

export default Card;
