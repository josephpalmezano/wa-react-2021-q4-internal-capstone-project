import React, { useState } from "react";
import "./ProductGrid.css";
import ProductThumb  from "./ProductThumb";
import FeaturedProducts from "../../mocks/en-us/featured-products.json";

function ProductGrid() {
  const [data] = useState(FeaturedProducts.results);

  return (
    <div className="thumb-wrapper">
      <ProductThumb data={data} />
    </div>
  );
}

export default ProductGrid;
