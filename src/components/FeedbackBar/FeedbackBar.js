import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const FeedbackBar = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="feedback-bar">
      <Button
        icon
        color="transparent"
        onClick={() => navigate(-1)}
        text="Go back"
      />
      {children}
    </div>
  );
};

export default FeedbackBar;
