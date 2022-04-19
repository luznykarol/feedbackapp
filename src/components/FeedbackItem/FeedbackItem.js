import React from "react";
import Box from "../Box/Box";
import Upvote from "../Upvote/Upvote";
import CommentBubble from "../CommentBubble/CommentBubble";
import { Link } from "react-router-dom";
const FeedbackItem = ({ onClick, handleChange, item }) => {
  const { title, description, category, comments, upvotes, id } = item;
  const noOfComments = comments?.length;

  return (
    <Box onClick={onClick} className={`feedback__box feedback__box--${id}`}>
      <div className="feedback-item">
        <div className="feedback-item__left">
          <Upvote
            checked={false}
            onChange={handleChange}
            name="test"
            voteCount={upvotes}
          />
        </div>
        <div className="feedback-item__center">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="feedback-item__center__tag">{category}</div>
        </div>
        <div className="feedback-item__right">
          <CommentBubble number={noOfComments} />
        </div>
      </div>
    </Box>
  );
};

export default FeedbackItem;
