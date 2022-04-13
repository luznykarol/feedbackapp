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
            tabActive={tabActive}
            setTabActive={setTabActive}
          />
        ))}
      </ul>
      <div className="tabs__content">
        {tabs.map((item) => (
          <TabsHeader item={item} tabActive={tabActive} />
        ))}

        <div className="tabs__items">
          {data.map((item) => (
            <RoadmapItem
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
