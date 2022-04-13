import React from "react";
import FeedbackBar from "../components/FeedbackBar/FeedbackBar";
import FormAddFeedback from "../components/Form/FormAddFeedback";
import Template from "../views/Template";

const AddFeedback = () => {
  return (
    <Template>
      <FeedbackBar />
      <FormAddFeedback title="Create New Feedback" />
    </Template>
  );
};

export default AddFeedback;
