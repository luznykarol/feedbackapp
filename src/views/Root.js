import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import Dashboard from "./Dashboard";
import Template from "./Template";
// import UsersProvider from "providers/UsersProvider";

const Root = () => {
  return (
    <Template>
      <Router id="root">
        {/* <UsersProvider> */}

        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>

        {/* </UsersProvider> */}
      </Router>
    </Template>
  );
};

export default Root;
