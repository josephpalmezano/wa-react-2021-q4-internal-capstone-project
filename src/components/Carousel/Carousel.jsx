import React, { useRef } from "react";
import "./Carousel.css";
import CategoryCard  from "./CategoryCard.jsx";
import CarouselNav  from "./CarouselNav";
import useProductCategories from "../../utils/hooks/useProductCategories.js";

function Carousel() {
  const cardRef = useRef(React.createRef());
  const categories = useProductCategories();

  return (
    <React.Fragment>
      {categories.isLoading ? (
        <div>Loading...</div>
      ) : (
      <div className="carousel-wrapper">
        <div className="card-wrapper" ref={cardRef}>
          <CategoryCard data={categories.data.results} />
        </div>
        <CarouselNav wrapperRef={cardRef}></CarouselNav>
      </div>
      )}
    </React.Fragment>
  );
}

export default Carousel;
