import React from "react";

const TabsHeader = ({ item, tabActive }) => {
  const { status, description } = item;
  return (
    tabActive === status && (
      <div className="tabs__header">
        <h3 className="tabs__header__title">{status}</h3>
        <div className="tabs__header__description">{description}</div>
      </div>
    )
  );
};

export default TabsHeader;
