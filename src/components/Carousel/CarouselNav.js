import React from "react";
import "./CarouselNav.css";

export default class CarouselNav extends React.Component {
  prev = (wrapperRef) => {
    const slide = wrapperRef.current;
    slide.scrollLeft -= slide.offsetWidth;
    if (slide.scrollLeft <= 0) {
      slide.scrollLeft = slide.scrollWidth;
    }
  };

  next = (wrapperRef) => {
    const slide = wrapperRef.current;
    slide.scrollLeft += slide.offsetWidth;
    if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
      slide.scrollLeft = 0;
    }
  };

  render() {
    const { wrapperRef }  = this.props;
    console.log(wrapperRef);
    return (
      <>
        <div className="carousel-prev" onClick={() => this.prev(wrapperRef)}>
          <span className="arrow-nav">{"<"}</span>
        </div>
        <div className="carousel-next" onClick={() => this.next(wrapperRef)}>
          <span className="arrow-nav">{">"}</span>
        </div>
      </>
    );
  }
}
