import React from "react";

const RoadmapLabel = ({ item }) => {
  const { category, count } = item;
  return (
    <div className="roadmap-label">
      <div className="roadmap-label__left">
        <div
          className={`roadmap-label__oval roadmap-label__oval--${category}`}
        />
        <div className="roadmap-label__text">{category}</div>
      </div>
      <div className="roadmap-label__quantity">{count}</div>
    </div>
  );
};

export default RoadmapLabel;
