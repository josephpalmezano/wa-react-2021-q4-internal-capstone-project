import React, { useState, useEffect } from "react";
import "./ProductsList.css";
import ProductThumb  from "./ProductThumb";
import Sidebar from "../Sidebar/Sidebar";
import Products from "../../mocks/en-us/products.json";

function ProductsList() {
  let [selectedCategory, setSelectedCategory] = useState("")
  let [data] = useState(Products.results);
  let [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(selectedCategory.length > 0 ? data.filter(d => d.data.category.id === selectedCategory) : data);
  },[data, selectedCategory]);

  return (
    <>
      <main>
        <Sidebar setSelectedCategory={setSelectedCategory}/>
        <div className="thumb-wrapper">
          <ProductThumb data={products} />
        </div>
      </main>
    </>
  );
}

export default ProductsList;