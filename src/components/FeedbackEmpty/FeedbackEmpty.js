import React from "react";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const FeedbackEmpty = ({ title, description }) => {
  const navigate = useNavigate();
  return (
    <section className="feedback-empty">
      <div className="feedback-empty__inner">
        <Icon className="feedback-empty__icon" icon="empty" />
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="feedback-empty__button"></div>
        <Button
          color="purple"
          className="feedback-empty__button"
          text="+ Add Feedback"
          onClick={() => navigate("/add-feedback")}
        />
      </div>
    </section>
  );
};

export default FeedbackEmpty;
