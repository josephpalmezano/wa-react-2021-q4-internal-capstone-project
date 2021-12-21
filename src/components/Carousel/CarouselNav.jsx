import React from "react";
import "./CarouselNav.css";

function CarouselNav(props) {
  const prev = ({ current }) => {
    current.scrollLeft -= current.offsetWidth;
    if (current.scrollLeft <= 0) {
      current.scrollLeft = current.scrollWidth;
    }
  };

  const next = ({ current }) => {
    current.scrollLeft += current.offsetWidth;
    if (current.scrollLeft >= current.scrollWidth - current.offsetWidth) {
      current.scrollLeft = 0;
    }
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
