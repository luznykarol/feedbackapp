import React, { useContext } from "react";
import TopBar from "../components/TopBar/TopBar";
import Button from "../components/Button/Button";
import Tabs from "../components/Tabs/Tabs";
import Template from "../views/Template";
import { TaskContext } from "../providers/TaskProvider";

const Roadmap = () => {
  const { tasks, roadmap } = useContext(TaskContext);
  return (
    <Template className="roadmap">
      <TopBar buttonColor="purple" buttonText="+ Add Feedback">
        <Button icon text="Go back" color="transparent" />
        <h1 className="roadmap__heading">Roadmap</h1>
      </TopBar>
      <div className="template__roadmap__content">
        <Tabs data={tasks} tabs={roadmap} />
        <div className="roadmap__desktop">
          <div className="roadmap__desktop__col roadmap__desktop__col--planned"></div>
          <div className="roadmap__desktop__col roadmap__desktop__col--in-progress"></div>
          <div className="roadmap__desktop__col roadmap__desktop__col--live"></div>
        </div>
      </div>
    </Template>
  );
};

export default Roadmap;
