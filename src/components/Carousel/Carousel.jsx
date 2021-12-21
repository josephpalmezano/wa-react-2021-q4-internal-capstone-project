import React, { useState, useRef } from "react";
import "./Carousel.css";
import CategoryCard  from "./CategoryCard.jsx";
import CarouselNav  from "./CarouselNav";
import ProductCategories from "../../mocks/en-us/product-categories.json";

function Carousel() {
  const cardRef = useRef(React.createRef());
  const [data] = useState(ProductCategories.results);
  return (
    <div className="carousel-wrapper">
      <div className="card-wrapper" ref={cardRef}>
        <CategoryCard data={data} />
      </div>
      <CarouselNav wrapperRef={cardRef}></CarouselNav>
    </div>
  );
}

export default Carousel;
