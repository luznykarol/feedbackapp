import React, { useState } from "react";
import Upvote from "../Upvote/Upvote";
import CommentBubble from "../CommentBubble/CommentBubble";
import Tag from "../Tag/Tag";

const RoadmapItem = ({ item, style }) => {
  const { title, status, upvotes, description, comments, category } = item;
  const [vote, setVote] = useState({ value: false, count: upvotes });

  let commentsCount = comments ? comments.length : 0;

  const handleChange = () => {
    setVote((prevState) => ({
      value: !vote.value,
      count: !vote.value ? vote.count + 1 : vote.count - 1,
    }));
  };

  return (
    <article style={style} className={`roadmap-item roadmap-item--${status}`}>
      <div className="roadmap-item__status">
        <div className="roadmap-item__status__oval" />
        {status}
      </div>
      <div className="roadmap-item__info">
        <div className="roadmap-item__info__title">{title}</div>
        <div className="roadmap-item__info__description">{description}</div>
        <Tag className="roadmap" fixed text={category} />
      </div>
      <div className="roadmap-item__bottom">
        <Upvote
          checked={false}
          onChange={handleChange}
          name="test"
          voteCount={upvotes}
        />
        <CommentBubble number={commentsCount} />
      </div>
    </article>
  );
};

export default RoadmapItem;
