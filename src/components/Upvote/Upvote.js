import React from "react";
import Icon from "../Icon/Icon";

const Upvote = ({ name, voteCount, onChange, checked }) => {
  return (
    <div className="upvote">
      <input
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name}>
        <Icon className="upvote__icon" icon="votearrow" />
        {voteCount}
      </label>
    </div>
  );
};

export default Upvote;
