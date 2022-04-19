import React, { useState, useContext } from "react";
import Box from "../Box/Box";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories";

import Tag from "../Tag/Tag";
import RoadmapLabel from "../RoadmapLabel/RoadmapLabel";
import Burger from "./Burger";
import { TaskContext } from "../../providers/TaskProvider";

const Navigation = ({
  title = "Frontend Mentor",
  description = "Feedback app",
}) => {
  const { roadmap } = useContext(TaskContext);
  const [selected, setSelected] = useState("all");
  const [navActive, setNavActive] = useState(false);

  const handleTagChange = (e) => {
    setSelected(e.target.value);
  };

  const handleBurgerClick = (e) => {
    e.preventDefault();
    setNavActive(!navActive);
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__title-box">
          <div className="nav__title-box__text">
            <div className="nav__title-box__title">{title}</div>
            <div className="nav__title-box__description">{description}</div>
          </div>
          <Burger navActive={navActive} onClick={handleBurgerClick} />
        </div>
        <div
          onClick={handleBurgerClick}
          className={
            navActive
              ? "nav__background nav__background--active"
              : "nav__background"
          }
        />
        <div
          className={
            navActive ? "nav__boxes nav__boxes--active" : "nav__boxes"
          }>
          <Box className="nav__box__tag">
            <div className="nav__tag-container">
              {categories.map((item) => {
                return (
                  <Tag
                    key={item.id}
                    selected={selected}
                    value={item.tag}
                    text={item.label}
                    onChange={handleTagChange}
                  />
                );
              })}
            </div>
          </Box>
          <Box className="nav__box__map">
            <div className="nav__map-header">
              <h3 className="">Roadmap</h3>
              <Link className="link" to="/roadmap">
                View
              </Link>
            </div>
            <div className="map-container">
              {roadmap.map((item) => {
                return <RoadmapLabel key={item.id} item={item} />;
              })}
            </div>
          </Box>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
