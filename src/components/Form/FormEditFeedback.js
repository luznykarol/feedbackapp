import React, { useContext, useEffect } from "react";
import Box from "../Box/Box";
import Select from "../FormInputs/Select/Select";
import TextInput from "../FormInputs/TextInput/TextInput";
import Field from "../FormInputs/Field/Field";
import Button from "../Button/Button";
import { TaskContext } from "../../providers/TaskProvider";

import { categories } from "../../helpers/helpers";

const FormEditFeedback = ({ title, feedbackId }) => {
  const {
    currentTask,
    getCurrentTask,
    deleteTask,
    formValues,
    setFormValues,
    editTask,
    handleSelectClick,
    handleOptionClick,
    selectOpen,
  } = useContext(TaskContext);

  useEffect(() => {
    getCurrentTask(feedbackId);

    currentTask && setFormValues(currentTask[0]);
  }, [feedbackId]);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditTask = (e) => {
    e.preventDefault();
    editTask(feedbackId);
  };

  return (
    <Box className="box__form" variant="large" icon="pen">
      <form className="form" onSubmit={handleEditTask}>
        <div className="form__title">{title}</div>
        <div className="form__fields">
          <Field
            title="Feedback Title"
            description="Add a short, descriptive headline">
            <TextInput
              id="title"
              defaultValue={formValues?.title}
              onChange={handleInputChange}
              title="Feedback Title"
              description="Add a short, descriptive headline"
            />
          </Field>
          <Field
            title="Category"
            description="Choose a category for your feedback">
            <Select
              onClick={handleSelectClick}
              onOptionClick={handleOptionClick}
              selectedOption={formValues?.category}
              isOpen={selectOpen}
              id="category"
              options={categories}
              title="Category"
              description="Choose a category for your feedback"
            />
          </Field>
          <Field
            title="Feedback Detail"
            description="Include any specific comments on what should be improved, added, etc.">
            <TextInput
              defaultValue={formValues?.description}
              id="description"
              onChange={handleInputChange}
              title="Feedback Detail"
              description="Include any specific comments on what should be improved, added, etc."
              textArea
            />
          </Field>
        </div>
        <div className="form__buttons">
          <Button
            small
            onClick={() => deleteTask(feedbackId)}
            color="red"
            text="Delete"
          />
          <Button small color="grey" text="Cancel" />
          <Button type="submit" color="purple" text="Save Changes" />
        </div>
      </form>
    </Box>
  );
};

export default FormEditFeedback;
