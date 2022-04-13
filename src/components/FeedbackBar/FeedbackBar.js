import React from "react";
import Button from "../Button/Button";

const FeedbackBar = ({ children }) => {
  return (
    <div className="feedback-bar">
      <Button icon color="transparent" text="Go back" />
      {children}
    </div>
  );
};

export default FeedbackBar;
