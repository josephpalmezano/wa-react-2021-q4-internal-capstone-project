import React from "react";
import ProductDetail  from "./ProductDetail";
import {
  useParams
} from "react-router-dom";
function ProductDetailPage() {
  const { id } = useParams();
  return (
    <>
      <ProductDetail id={{id}}/>
    </>
  );
}

export default ProductDetailPage;
