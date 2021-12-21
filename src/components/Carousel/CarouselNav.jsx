import React from "react";
import "./CarouselNav.css";

function CarouselNav(props) {
  const prev = ({ current }) => {
    console.log(current)
    /*let { scrollLeft } = current;
    const { offsetWidth } = current;
    scrollLeft -= offsetWidth;
    if (scrollLeft <= 0) {
      scrollLeft = scrollWidth;
    }*/
  };
  const next = ({ current }) => {
    console.log(current)
    /*let { scrollLeft, scrollWidth, offsetWidth } = current;
    const { scrollWidth, offsetWidth } = current;
    scrollLeft += offsetWidth;
    if (scrollLeft >= scrollWidth - offsetWidth) {
      scrollLeft = 0;
    }*/
  };

  const { wrapperRef }  = props;
  return (
    <>
      <div className="carousel-prev" onClick={() => prev(wrapperRef)}>
        <span className="arrow-nav">{"<"}</span>
      </div>
      <div className="carousel-next" onClick={() => next(wrapperRef)}>
        <span className="arrow-nav">{">"}</span>
      </div>
    </>
  );
}

export default CarouselNav;
