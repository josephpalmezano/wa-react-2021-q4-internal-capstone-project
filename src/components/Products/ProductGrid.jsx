import React, { useState } from "react";
import "./ProductGrid.css";
import ProductThumb  from "./ProductThumb";
import FeaturedProducts from "../../mocks/en-us/featured-products.json";
import { Link } from "react-router-dom";

function ProductGrid() {
  const [data] = useState(FeaturedProducts.results);

  return (
    <>
      <div className="thumb-wrapper">
        <ProductThumb data={data} />
      </div>
      <div className="btn-wrapper">
        <Link className="all-products-btn" to="products">VIEW ALL PRODUCTS</Link>
      </div>
    </>
  );
}

export default ProductGrid;
