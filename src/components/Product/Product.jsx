import React from "react";
import { Button } from "../Button/Button";
import "./product.css";

export const Product = ({ item, handleClick }) => {
  return (
    <div className="flex-item">
      <div className="card-img">
        <img src={item.image} />
      </div>
      <div className="card-text">
        <h2 className="title">{item.title}</h2>
        <h4 className="price">{item.price}р</h4>
      </div>
      <div className="card-btn">
        <Button label="Выбрать" handleClick={handleClick} item={item} />
      </div>
    </div>
  );
};
