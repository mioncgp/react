import React from "react";
import { Button } from "../Button/Button";
import "./current-item.css";

export const CurrentItem = ({ currentItem, handleClick, getTop }) => {
  return (
    <div id="cur-container" style={{ top: `${getTop() + 50}px` }}>
      <div className="card-item">
        <div className="card-img flex-card-item">
          <div className="card-btn">
            <Button label="Назад" handleClick={handleClick} />
          </div>
          <img src={currentItem.image} />
          <div className="card-btn">
            <Button label="Выбрать" handleClick={handleClick} />
          </div>
        </div>
        <div className="card-info flex-card-item">
          <div className="card-info-item">
            <h2 className="cur-title">Название: {currentItem.title}</h2>
          </div>
          <div className="card-info-item">
            <h4 className="cur-price">Цена: {currentItem.price}р</h4>
          </div>
          <div className="card-info-item">
            <h3>Состав:</h3>
            <p>{currentItem.sostav}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
