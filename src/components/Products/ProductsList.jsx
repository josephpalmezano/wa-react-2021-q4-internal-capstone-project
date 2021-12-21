import React, { useState } from "react";
import "./ProductsList.css";
import ProductThumb  from "./ProductThumb";
import Sidebar from "../Sidebar/Sidebar";
import useQuery from "../../utils/hooks/useQuery.js";
import useProducts from "../../utils/hooks/useProducts.js";

function ProductsList() {
  let [selectedCategory, setSelectedCategory] = useState(null)
  let products = useProducts();
  let query = useQuery();
  
  const getProducts = () => {
    return selectedCategory ? products.data.results.filter(d => d.data.category.id === selectedCategory) : products.data.results;
  };

  return (
    <>
      <main>
        <Sidebar setSelectedCategory={setSelectedCategory}/>
        <React.Fragment>
        {products.isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="thumb-wrapper">
            <ProductThumb data={getProducts()} category={query.get("category")} />
          </div>
        )}
        </React.Fragment>
      </main>
    </>
  );
}

export default ProductsList;