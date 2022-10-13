import React from "react";
import ProductItem from "../productItem/ProductItem";
export default class Products extends React.Component {
    render() {
        return (
            <div className="Wrapper">
                <ProductItem 
                imageUrl="./images/pc1.jpg" imageAlt="pc" title="Lapotop" subtitle="Lorem Ipsum Dolor Amet Offal Butcher Quinoa Sustainable Gastropub, Echo Park Actually Green Juice Sriracha Paleo. Brooklyn Sriracha Semiotics" price="2259" discountedprice="1059" addToWishList={this.props.addToWishList}>
                </ProductItem>
                <ProductItem 
                imageUrl="./images/gamingpc.webp" imageAlt="gamingpc" title="Gaming PC" subtitle="Lorem Ipsum Dolor Amet Offal Butcher Quinoa Sustainable Gastropub, Echo Park Actually Green Juice Sriracha Paleo. Brooklyn Sriracha Semiotics" price="22259" discountedprice="15259" addToWishList={this.props.addToWishList}>
                </ProductItem>
                <ProductItem
                 imageUrl="./images/barcelona.jpg" imageAlt="kit" title="Barcelona Kit 21/22" subtitle="Lorem Ipsum Dolor Amet Offal Butcher Quinoa Sustainable Gastropub, Echo Park Actually Green Juice Sriracha Paleo. Brooklyn Sriracha Semiotics" price="1259" discountedprice="999" addToWishList={this.props.addToWishList}>
                 </ProductItem>
                <ProductItem
                 imageUrl="./images/m2mbpro.jpg" imageAlt="macbook" title="Macbook Pro M2 Chip" subtitle="Lorem Ipsum Dolor Amet Offal Butcher Quinoa Sustainable Gastropub, Echo Park Actually Green Juice Sriracha Paleo. Brooklyn Sriracha Semiotics" discountedprice="13259" addToWishList={this.props.addToWishList}>
                 </ProductItem>
                <ProductItem 
                imageUrl="./images/mercedes.webp" imageAlt="mercedes" title="Mercedes-Benz S Klass" subtitle="Lorem Ipsum Dolor Amet Offal Butcher Quinoa Sustainable Gastropub, Echo Park Actually Green Juice Sriracha Paleo. Brooklyn Sriracha Semiotics" discountedprice="55259" addToWishList={this.props.addToWishList}>
                </ProductItem>
                <ProductItem imageUrl="./images/Phantom.jpg" imageAlt="phantom" title="Rolls Royce Phantom" subtitle="Lorem Ipsum Dolor Amet Offal Butcher Quinoa Sustainable Gastropub, Echo Park Actually Green Juice Sriracha Paleo. Brooklyn Sriracha Semioticsbtitle" discountedprice="11000" addToWishList={this.props.addToWishList} >
                </ProductItem>
            </div>
        )
    }
}