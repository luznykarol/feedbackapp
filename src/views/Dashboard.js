import React, { useContext } from "react";
import Template from "./Template";
import Button from "../components/Button/Button";
import Field from "../components/Field/Field";
import CustomSelect from "../components/CustomSelect/CustomSelect";
import Box from "../components/Box/Box";
import MapItem from "../components/MapItem/MapItem";
import Tag from "../components/Tag/Tag";
import TitleBox from "../components/TitleBox/TitleBox";
import Navigation from "../components/Navigation/Navigation";
import Card from "../components/Card/Card";
import FeedbackEmpty from "../components/FeedbackEmpty/FeedbackEmpty";
import TopBar from "../components/TopBar/TopBar";

import "../index.scss";
const Dashboard = () => {
  return (
    <>
      <Navigation />
      <Card />
      <Box>
        <FeedbackEmpty
          title="There is no feedback yet."
          description="Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app."
        />
      </Box>
      <TopBar
        suggestions={5}
        buttonType="purple"
        buttonText="+ Add feedback"></TopBar>
    </>
  );
};

export default Dashboard;
