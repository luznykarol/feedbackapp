import React, { useContext } from "react";
import Navigation from "../components/Navigation/Navigation";
import TopBar from "../components/TopBar/TopBar";
import FeedbackEmpty from "../components/FeedbackEmpty/FeedbackEmpty";
import Box from "../components/Box/Box";
import Icon from "../components/Icon/Icon";
import "../index.scss";
const Dashboard = () => {
  return (
    <div className="dashboard-template">
      <Navigation />
      <div className="dashboard-template__content">
        <TopBar buttonType="purple" buttonText="+ Add Feedback">
          <Icon className="top-bar__icon" icon="bulb" />
        </TopBar>
        <Box>
          <FeedbackEmpty
            title="There is no feedback yet."
            description="Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app."
            buttonType="purple"
            buttonText="+ Add Feedback"
          />
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
