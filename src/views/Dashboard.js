import React, { useContext, useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import TopBar from "../components/TopBar/TopBar";
import FeedbackEmpty from "../components/FeedbackEmpty/FeedbackEmpty";
import Box from "../components/Box/Box";
import Icon from "../components/Icon/Icon";
import Upvote from "../components/Upvote/Upvote";
import "../index.scss";
const Dashboard = () => {
  const [vote, setVote] = useState({ value: false, count: 53 });

  const handleChange = () => {
    setVote((prevState) => ({
      value: !vote.value,
      count: !vote.value ? vote.count + 1 : vote.count - 1,
    }));
  };

  return (
    <div className="dashboard-template">
      <Navigation />
      <div className="dashboard-template__content">
        <TopBar buttonType="purple" buttonText="+ Add Feedback">
          <Icon className="top-bar__icon" icon="bulb" />
        </TopBar>
        <Box>
          <Upvote
            checked={vote.value}
            onChange={handleChange}
            name="test"
            voteCount={vote.count}
          />
        </Box>
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
