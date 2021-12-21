import React from "react";
import "./Carousel.css";
import CategoryCard  from "./CategoryCard.js";
import CarouselNav  from "./CarouselNav";
import ProductCategories from "../../mocks/en-us/product-categories.json";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.cardRef = React.createRef();
    this.state = {
      data: ProductCategories.results,
    };
  }
  render() {
    return (
      <div className="carousel-wrapper">
        <div className="card-wrapper" ref={this.cardRef}>
          <CategoryCard data={this.state.data} />
        </div>
        <CarouselNav wrapperRef={this.cardRef}></CarouselNav>
      </div>
    );
  }
}
