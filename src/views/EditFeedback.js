import React from "react";
import FeedbackBar from "../components/FeedbackBar/FeedbackBar";
import Button from "../components/Button/Button";
import Template from "../views/Template";

const EditFeedback = () => {
  return (
    <Template>
      <FeedbackBar>
        <Button color="blue" text="Edit Feedback" />
      </FeedbackBar>
    </Template>
  );
};

export default EditFeedback;
