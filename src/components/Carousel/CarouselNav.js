import React from "react";
import "./CarouselNav.css";

export default class CarouselNav extends React.Component {
  const prev = ({ current }) => {
    let { scrollLeft } = current;
    const { offsetWidth } = current;
    scrollLeft -= offsetWidth;
    if (scrollLeft <= 0) {
      scrollLeft = scrollWidth;
    }
  };

  const next = ({ current }) => {
    let { scrollLeft, scrollWidth, offsetWidth } = current;
    const { scrollWidth, offsetWidth } = current;
    scrollLeft += offsetWidth;
    if (scrollLeft >= scrollWidth - offsetWidth) {
      scrollLeft = 0;
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
