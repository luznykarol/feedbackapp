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
// import { UsersContext } from "providers/UsersProvider";
import "../index.scss";
const Dashboard = () => {
  return (
    <>
      <Navigation />
      <Card />
    </>
  );
};

export default Dashboard;
