import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Roadmap from "./Roadmap";
import AddFeedback from "./AddFeedback";
import TaskProvider from "../providers/TaskProvider";

const Root = () => {
  return (
    <>
      <Router id="root">
        <TaskProvider>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/roadmap" element={<Roadmap />}></Route>
            <Route path="/add-feedback" element={<AddFeedback />}></Route>
          </Routes>
        </TaskProvider>
      </Router>
    </>
  );
};

export default Root;
