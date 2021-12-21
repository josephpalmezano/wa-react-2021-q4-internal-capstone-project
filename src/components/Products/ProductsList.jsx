import React, { useState } from "react";
import "./ProductsList.css";
import ProductThumb  from "./ProductThumb";
import Sidebar from "../Sidebar/Sidebar";
import Pagination from "../Pagination/Pagination";
import useQuery from "../../utils/hooks/useQuery.js";
import useProducts from "../../utils/hooks/useProducts.js";

function ProductsList() {
  let [selectedCategory, setSelectedCategory] = useState(null)
  let products = useProducts();
  let query = useQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [thumbsPerPage] = useState(16);

  //const paginate = pageNumber => setCurrentPage(pageNumber);
  const paginate = ({ event,  pageNumber}) => {
    event.preventDefault();
    setCurrentPage(pageNumber)
  };
  const getProducts = () => {
    const indexOfLastThumb = currentPage * thumbsPerPage;
    const indexOfFirstThumb = indexOfLastThumb - thumbsPerPage;
    const result = selectedCategory ? products.data.results.filter(d => d.data.category.id === selectedCategory) : products.data.results;
    return result.slice(indexOfFirstThumb, indexOfLastThumb);
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
            <Pagination
              thumbsPerPage={thumbsPerPage}
              totalThumbs={products.data.results.length}
              paginate={paginate}
            />
          </div>
        )}
        </React.Fragment>
      </main>
    </>
  );
}

export default ProductsList;