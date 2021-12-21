import React from "react";
import "./ProductGrid.css";
import ProductThumb  from "./ProductThumb";
import useFeaturedProducts from "../../utils/hooks/useFeaturedProducts.js";
import { Link } from "react-router-dom";

function ProductGrid() {
  const featured = useFeaturedProducts();

  return (
    <React.Fragment>
      {featured.isLoading ? (
        <div>Loading...</div>
      ) : (
      <>
      <div className="thumb-wrapper">
        <ProductThumb data={featured.data.results} />
      </div>
      <div className="btn-wrapper">
        <Link className="all-products-btn" to="products">VIEW ALL PRODUCTS</Link>
      </div>
      </>
      )}
    </React.Fragment>
  );
}

export default ProductGrid;
