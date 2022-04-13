import React from "react";

const TabsCategories = ({ item, tabActive, setTabActive }) => {
  const { category, count } = item;

  return (
    <li
      onClick={() => setTabActive(category)}
      className={
        tabActive === category
          ? `tab__item tab__item tab__item--active--${category}`
          : `tab__item tab__item`
      }>
      {`${category} (${count})`}
    </li>
  );
};

export default TabsCategories;
