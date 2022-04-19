import React from "react";
import { useParams } from "react-router-dom";
import FeedbackBar from "../components/FeedbackBar/FeedbackBar";

import FormEditFeedback from "../components/Form/FormEditFeedback";
import Template from "../views/Template";

const EditFeedback = () => {
  let { id } = useParams();

  return (
    <Template className="add-feedback">
      <FeedbackBar />
      <FormEditFeedback feedbackId={parseInt(id)} />
    </Template>
  );
};

export default EditFeedback;
