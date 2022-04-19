import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Roadmap from "./Roadmap";
import AddFeedback from "./AddFeedback";
import EditFeedback from "./EditFeedback";
import Feedback from "./Feedback";
import Error from "./Error";
import TaskProvider from "../providers/TaskProvider";

const Root = () => {
  return (
    <>
      <Router id="root">
        <TaskProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/add-feedback" element={<AddFeedback />} />
            <Route path="/feedback/:id/edit" element={<EditFeedback />} />
            <Route path="/feedback/:id" element={<Feedback />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </TaskProvider>
      </Router>
    </>
  );
};

export default Root;
