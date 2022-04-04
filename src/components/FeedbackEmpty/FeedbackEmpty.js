import React from "react";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

const FeedbackEmpty = ({ title, description }) => {
  return (
    <section className="feedback-empty">
      <div className="feedback-empty__inner">
        <Icon className="feedback-empty__icon" icon="empty" />
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="feedback-empty__button"></div>
        <Button
          type="purple"
          className="feedback-empty__button"
          text="+ Add Feedback"
        />
      </div>
    </section>
  );
};

export default FeedbackEmpty;
