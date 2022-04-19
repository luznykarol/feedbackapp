import React, { useContext, useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import TopBar from "../components/TopBar/TopBar";
import { useNavigate } from "react-router-dom";
import FeedbackEmpty from "../components/FeedbackEmpty/FeedbackEmpty";
import Box from "../components/Box/Box";
import Icon from "../components/Icon/Icon";
import FeedbackItem from "../components/FeedbackItem/FeedbackItem";
import Template from "../views/Template";
import { TaskContext } from "../providers/TaskProvider";

const Dashboard = () => {
  const { tasks } = useContext(TaskContext);
  const navigate = useNavigate();
  const [vote, setVote] = useState({ value: false, count: 53 });

  const handleChange = () => {
    setVote((prevState) => ({
      value: !vote.value,
      count: !vote.value ? vote.count + 1 : vote.count - 1,
    }));
  };

  return (
    <Template className="dashboard">
      <Navigation tasks={tasks} />
      <div className="template__dashboard__content">
        <TopBar buttonColor="purple" buttonText="+ Add Feedback">
          <Icon className="top-bar__icon" icon="bulb" />
          <h3>{tasks.length} suggestions</h3>
        </TopBar>
        <div className="template__dashboard__content__items">
          {tasks ? (
            tasks.map((item) => (
              <FeedbackItem
                key={item.id}
                onClick={() => navigate(`/feedback/${item.id}`)}
                item={item}
                handleChange={handleChange}
              />
            ))
          ) : (
            <Box>
              <FeedbackEmpty
                title="There is no feedback yet."
                description="Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app."
                buttonColor="purple"
                buttonText="+ Add Feedback"
              />
            </Box>
          )}
        </div>
      </div>
    </Template>
  );
};

export default Dashboard;
