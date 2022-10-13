import React from "react";

export default class ProductItem extends React.Component {
    addtoList = (title, discountedprice) => {
        this.props.addToWishList(title, discountedprice)
    }
    render() {
        return (
            <div className="product-div">
                <img className="product-image" src={this.props.imageUrl} alt={this.props.imageAlt}></img>
                <div className="product-data">
                    <h1> {this.props.title}</h1>
                    <p className="subtitle"> {this.props.subtitle} </p>
                    <div className="divPrice">
                        <p className="discountedprice"> {this.props.discountedprice} :-</p>
                        <p className="price"> {this.props.price} </p>
                    </div>
                    <button onClick={(() => this.addtoList(this.props.title, this.props.discountedprice))} className="addToList"> Add to list </button>
                </div>
            </div>

        )
    }
}