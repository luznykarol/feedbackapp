import React, { createContext, useState, useEffect } from "react";
import { taskData } from "../data/taskData";

export const TaskContext = createContext({
  tasks: [],
  handleAddTask: () => {},
});

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(taskData);
  const [isSending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState(true);
  const [roadmap, setRoadmap] = useState(taskData);

  const handleTaskByCategory = (arr, category) => {
    arr.filter((item) => {
      if (item.status === category) {
        return item;
      }
    });
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

  useEffect(() => {
    if (tasks) {
      setRoadmap(createRoadmap(tasks));
    }
  }, []);

  const defaultFormState = {
    title: "",
    category: "feature",
    description: "",
    upvotes: 0,
    comments: [],
    status: "planned",
  };

  const handleAddTask = (values) => {
    const newTask = {
      id: tasks.length + 1,
      title: values.title,
      category: values.category,
      description: values.description,
      upvotes: 0,
      comments: [],
      status: values.status,
    };
    setTasks([...tasks, newTask]);
  };

  const handleRemoveTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.title !== id);
    setTasks(filteredTasks);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        handleAddTask,
        handleRemoveTask,
        roadmap,
        defaultFormState,
      }}>
      {children}
    </TaskContext.Provider>
  );
};
export default TaskProvider;
