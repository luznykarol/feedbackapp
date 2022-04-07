import React from "react";
import Box from "../Box/Box";
import Upvote from "../Upvote/Upvote";
import Icon from "../Icon/Icon";
const FeedbackItem = ({
  vote,
  title = "Add tags for solutions",
  description = "Easier to search for solutions based on a specific stack. Easier to search for solutions based on a specific stack. Easier to search for solutions based on a specific stack.",
  tag = "enhancement",
  commentCount = 2,
  handleChange,
}) => {
  return (
    <Box className="feedback__box">
      <article className="feedback-item">
        <div className="feedback-item__left">
          <Upvote
            checked={vote.value}
            onChange={handleChange}
            name="test"
            voteCount={vote.count}
          />
        </div>
        <div className="feedback-item__center">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="feedback-item__center__tag">{tag}</div>
        </div>
        <div className="feedback-item__right">
          <div className="feedback-item__right__comment">
            <Icon
              className="feedback-item__right__comment__icon"
              icon="textbubble"
            />
            <div className="feedback-item__right__comment__count">
              {commentCount}
            </div>
          </div>
        </div>
      </article>
    </Box>
  );
};

export default FeedbackItem;
