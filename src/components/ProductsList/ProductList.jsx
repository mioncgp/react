import React, { Component, Fragment } from "react";
import { Product } from "../Product/Product";
import { CurrentItem } from "../CurrentItem/CurrentItem";
import { data } from "../../data";
import "./product-list.css";

class ProductList extends Component {
  state = {
    items: [],
    currentItem: {},
  };

  componentDidMount() {
    this.setState({ items: data.products });
  }

  handleClick = (item) => {
    this.setState({ currentItem: item });
  };

  getTop = () => {
    const getTop = document.getElementById("root").getBoundingClientRect();
    return getTop.top * -1;
  };

  render() {
    const { items, currentItem } = this.state;
    return (
      <Fragment>
        {Object.keys(currentItem).length !== 0 && (
          <CurrentItem
            getTop={this.getTop}
            currentItem={currentItem}
            handleClick={this.handleClick}
          />
        )}
        <div className="container">
          <div className="flex-container">
            {items.map((item) => {
              return (
                <Product
                  key={item._id}
                  item={item}
                  className="flex-item"
                  handleClick={this.handleClick}
                />
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProductList;
