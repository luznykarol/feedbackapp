import React, { useState } from "react";
import Box from "../Box/Box";
import { Link } from "react-router-dom";
import { categories } from "../../data/categories";
import Tag from "../Tag/Tag";
import Burger from "./Burger";

const Navigation = ({
  title = "Frontend Mentor",
  description = "Feedback app",
}) => {
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
      <div className="title-box">
        <div className="title-box__title">{title}</div>
        <div className="title-box__description">{description}</div>
        <Burger navActive={navActive} onClick={handleBurgerClick} />
      </div>

      <Box>
        <div className="tag-container">
          {categories.map((item) => {
            return (
              <Tag
                selected={selected}
                value={item.tag}
                text={item.label}
                onClick={handleTagChange}
              />
            );
          })}
        </div>
      </Box>
      <Box>
        <div className="map-header">
          <div className="">Roadmap</div>
          <Link to="/">View</Link>
        </div>
        <div className="map-container"></div>
      </Box>
    </nav>
  );
};

export default Navigation;
