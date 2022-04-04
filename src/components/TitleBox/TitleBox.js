import React from "react";

const TitleBox = ({
  title = "Frontend Mentor",
  description = "Feedback Board",
}) => {
  return (
    <div className="title-box">
      <div className="title-box__title">{title}</div>
      <div className="title-box__description">{description}</div>
    </div>
  );
};

export default TitleBox;
