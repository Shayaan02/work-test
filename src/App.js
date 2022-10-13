import React from "react";
import Products from "./components/productlist/productlist";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productNames: [],
      totalPrice: 0
    }
  }
  addToWishList = (title, price) => {
    let list = this.state.productNames;
    list.push(title);
    let total = this.state.totalPrice + parseInt(price);
    this.setState({ productNames: list, totalPrice: total })
  }
  render() {
    return (
      <div>
        <Products addToWishList={this.addToWishList}></Products>
        <div className="Wishlist">
          <h1>Wishlist</h1>
          {this.state.productNames.map((value) => {
            return (
              <h3> {value}</h3>
            )
          })}
          <h2>Total price: {this.state.totalPrice} :- </h2>¨
        </div>
      </div>
    )
  }
}