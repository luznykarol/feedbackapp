import React, { useContext, useState } from "react";
import Box from "../Box/Box";
import Select from "../FormInputs/Select/Select";
import TextInput from "../FormInputs/TextInput/TextInput";
import Field from "../FormInputs/Field/Field";
import Button from "../Button/Button";
import { TaskContext } from "../../providers/TaskProvider";

const FormAddFeedback = ({ title }) => {
  const options = [
    { value: "feature", label: "Feature" },
    { value: "ui", label: "UI" },
    { value: "ux", label: "UX" },
    { value: "enhancement", label: "Enhancement" },
    { value: "bug", label: "Bug" },
  ];

  const { tasks, defaultFormState, handleAddTask } = useContext(TaskContext);
  const [formValues, setFormValues] = useState(defaultFormState);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();
    handleAddTask(formValues);
    setFormValues(defaultFormState);
  };

  console.log(tasks);

  return (
    <Box className="box__form" variant="large" icon="plus">
      <form className="form" onSubmit={handleSubmitTask}>
        <div className="form__title">{title}</div>
        <div className="form__fields">
          <Field
            title="Feedback Title"
            description="Add a short, descriptive headline">
            <TextInput
              id="title"
              onChange={handleInputChange}
              title="Feedback Title"
              description="Add a short, descriptive headline"
            />
          </Field>
          <Field
            title="Category"
            description="Choose a category for your feedback">
            <Select
              onChange={handleInputChange}
              id="category"
              options={options}
              title="Category"
              description="Choose a category for your feedback"
            />
          </Field>
          <Field
            title="Feedback Detail"
            description="Include any specific comments on what should be improved, added, etc.">
            <TextInput
              id="description"
              onChange={handleInputChange}
              title="Feedback Detail"
              description="Include any specific comments on what should be improved, added, etc."
              textArea
            />
          </Field>
        </div>
        <div className="form__buttons">
          <Button color="grey" text="Cancel" />
          <Button type="submit" color="purple" text="Add Feedback" />
        </div>
      </form>
    </Box>
  );
};

export default FormAddFeedback;
