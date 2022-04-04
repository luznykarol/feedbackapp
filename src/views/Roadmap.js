import React, { useContext } from "react";
import TopBar from "../components/TopBar/TopBar";

import "../index.scss";
const Dashboard = () => {
  return (
    <div className="roadmap-template">
      <div className="roadmap-template__content">
        <TopBar buttonType="purple" buttonText="+ Add Feedback" />
      </div>
    </div>
  );
};

export default Dashboard;
