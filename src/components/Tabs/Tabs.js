import React, { useState } from "react";
import TabsHeader from "./TabsHeader";
import TabsCategories from "./TabsCategories";
import RoadmapItem from "../RoadmapItem/RoadmapItem";

const Tabs = ({ tabs, data }) => {
  const [tabActive, setTabActive] = useState(tabs[0].category);

  return (
    <div className="tabs">
      <ul className="tabs__titles">
        {tabs.map((item) => (
          <TabsCategories
            item={item}
            key={item.id}
            tabActive={tabActive}
            setTabActive={setTabActive}
          />
        ))}
      </ul>
      <div className="tabs__content">
        {tabs.map((item) => (
          <TabsHeader key={item.id} item={item} tabActive={tabActive} />
        ))}

        <div className="tabs__items">
          {data.map((item) => (
            <RoadmapItem
              key={item.id}
              item={item}
              style={tabActive === item.status ? {} : { display: "none" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
