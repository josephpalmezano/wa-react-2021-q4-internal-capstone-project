import React from "react";
import "./ProductGrid.css";
import ProductThumb  from "./ProductThumb";
import FeaturedProducts from "../../mocks/en-us/featured-products.json";

export default class ProductGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: FeaturedProducts.results,
    };
  }
  render() {
    return (
      <div className="thumb-wrapper">
        <ProductThumb data={this.state.data} />
      </div>
    );
  }
}
