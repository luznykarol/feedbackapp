import React from "react";

const MapItem = ({ text = "Planned", quantity = "10", color = "orange" }) => {
  return (
    <div className="map-item">
      <div className="map-item__left">
        <div className={`map-item__oval map-item__oval--${color}`} />
        <div className="map-item__text">{text}</div>
      </div>
      <div className="map-item__quantity">{quantity}</div>
    </div>
  );
};

export default MapItem;
