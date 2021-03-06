import React, { useContext, useEffect, useRef } from "react";
import Box from "../Box/Box";
import Select from "../FormInputs/Select/Select";
import TextInput from "../FormInputs/TextInput/TextInput";
import Field from "../FormInputs/Field/Field";
import Button from "../Button/Button";
import { TaskContext } from "../../providers/TaskProvider";
import { categories } from "../../helpers/helpers";

const FormAddFeedback = ({ title }) => {
  const {
    addTask,
    handleSelectClick,
    handleOptionClick,
    selectedOption,
    setSelectedOption,
    selectOpen,
    formValues,
    setFormValues,
  } = useContext(TaskContext);

  const formRef = useRef();

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();
    addTask(formValues);

    formRef.current.reset();
  };

  useEffect(() => {
    if (!selectedOption) {
      setSelectedOption(categories[0].value);
    }
  }, []);

  return (
    <Box className="box__form" variant="large" icon="plus">
      <form className="form" onSubmit={handleSubmitTask} ref={formRef}>
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
              onClick={handleSelectClick}
              onOptionClick={handleOptionClick}
              selectedOption={selectedOption}
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
