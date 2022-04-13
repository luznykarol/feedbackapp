import React from "react";
import Icon from "../Icon/Icon";

const CommentBubble = ({ number }) => {
  return (
    <div className="comment-bubble">
      <Icon className="comment-bubble__icon" icon="textbubble" />
      <div className="comment-bubble__number">{number ? number : 0}</div>
    </div>
  );
};

export default CommentBubble;
