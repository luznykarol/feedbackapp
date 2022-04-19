import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FeedbackBar from "../components/FeedbackBar/FeedbackBar";
import Button from "../components/Button/Button";
import Template from "../views/Template";
import { TaskContext } from "../providers/TaskProvider";
import FeedbackItem from "../components/FeedbackItem/FeedbackItem";
import Comment from "../components/Comment/Comment";
import Box from "../components/Box/Box";

const Feedback = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  const [comments, setComments] = useState([]);

  let { currentTask, tasks, setCurrentTask, handleUpvote } =
    useContext(TaskContext);

  useEffect(() => {
    if (tasks && id) {
      setCurrentTask(tasks?.filter((task) => task.id == parseInt(id)));
    }
  }, []);

  useEffect(() => {
    if (currentTask) {
      setComments(currentTask[0].comments);
    }
  }, [currentTask]);

  return (
    <Template className="feedback">
      <FeedbackBar>
        <Button
          color="blue"
          text="Edit feedback"
          onClick={() => navigate(`/feedback/${id}/edit`)}
        />
      </FeedbackBar>
      {currentTask?.map((item) => (
        <FeedbackItem
          key={`feedback-detail-${item.id}`}
          item={item}
          handleChange={handleUpvote}
        />
      ))}
      {comments && (
        <Box className="">
          <h3>{comments.length} comments</h3>
          <div className="comments">
            {comments.map((item) => {
              return <Comment key={item.id} item={item} />;
            })}
          </div>
        </Box>
      )}
    </Template>
  );
};

export default Feedback;
