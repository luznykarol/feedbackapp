import React, { createContext, useState, useEffect } from "react";
import { taskData } from "../data/taskData";
import { useNavigate } from "react-router-dom";
export const TaskContext = createContext({
  tasks: [],
  addTask: () => {},
});

const TaskProvider = ({ children }) => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(taskData);
  const [currentTaskId, setCurrentTaskId] = useState(0);
  const [formValues, setFormValues] = useState();
  const [comments, setComments] = useState([]);
  const [vote, setVote] = useState(0);
  const [currentTask, setCurrentTask] = useState();
  const [isSending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState(true);
  const [roadmap, setRoadmap] = useState(taskData);
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (tasks) {
      setRoadmap(createRoadmap(tasks));
    }
  }, [tasks]);

  const handleSelectClick = () => {
    setSelectOpen(!selectOpen);
  };

  const handleOptionClick = (option) => () => {
    console.log("option", option.value);

    setSelectedOption(option.value);
    setSelectOpen(false);
    setFormValues({
      ...formValues,
      category: option.value,
    });
    console.log(formValues, option);
  };

  const createRoadmap = (arr) => {
    const obj = {};
    arr.forEach((item) => {
      const key = item.status;

      if (!obj[key]) {
        obj[key] = { category: key, id: item.id, count: 0 };
      }
      obj[key].count += 1;
    });
    return Object.values(obj);
  };

  const getCurrentTask = (id) => {
    setCurrentTask(tasks?.filter((task) => task.id === id));
  };

  const handleUpvote = (vote) => {
    setVote(() => ({
      value: !vote.value,
      count: !vote.value ? vote.count + 1 : vote.count - 1,
    }));
  };

  const defaultFormState = {
    title: "",
    category: "feature",
    description: "",
    upvotes: 0,
    comments: [],
    status: "planned",
  };

  const addTask = (values) => {
    const newTask = {
      id: tasks.length + 1,
      title: values.title,
      category: values.category,
      description: values.description,
      upvotes: 0,
      comments: [],
      status: "planned",
    };
    setTasks([...tasks, newTask]);
    navigate("/");
  };
  console.log(tasks);

  const deleteTask = (id) => {
    let updatedTasks = [...tasks].filter((task) => task.id !== id);
    setTasks(updatedTasks);
    navigate("/");
  };

  const editTask = (id) => {
    const updatedTasks = [...tasks].map((task) => {
      if (task.id === id) {
        return formValues;
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
    navigate("/");
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        editTask,
        deleteTask,
        roadmap,
        defaultFormState,
        currentTaskId,
        setCurrentTaskId,
        getCurrentTask,
        currentTask,
        setCurrentTask,
        setTasks,
        formValues,
        setFormValues,

        handleUpvote,
        handleSelectClick,
        handleOptionClick,
        setSelectedOption,
        selectedOption,
        selectOpen,
      }}>
      {children}
    </TaskContext.Provider>
  );
};
export default TaskProvider;
