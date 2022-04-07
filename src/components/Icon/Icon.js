import React from "react";
import Suggestions from "../../assets/icons/suggestions";
import Empty from "../../assets/icons/empty";
import Bulb from "../../assets/icons/bulb";
import VoteArrow from "../../assets/icons/votearrow";
import TextBubble from "../../assets/icons/textbubble";

const Icon = ({ icon, className }) => {
  const icons = {
    suggestions: Suggestions,
    empty: Empty,
    bulb: Bulb,
    votearrow: VoteArrow,
    textbubble: TextBubble,
  };

  const Icon = icons[icon];
  return (
    <>
      {icon && (
        <div className={`icon ${className}`}>
          <Icon />
        </div>
      )}
    </>
  );
};

export default Icon;
