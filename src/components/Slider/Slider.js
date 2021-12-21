import React from "react";
import "./Slider.css";
import SliderNavButton from "./SliderNavButton";
import FeaturedBanners from "../../mocks/en-us/featured-banners.json";

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 1,
      dataSlider: FeaturedBanners.results,
    };
  }

  nextSlide = () => {
    if (this.state.slideIndex !== this.state.dataSlider.length) {
      this.setState({ slideIndex: this.state.slideIndex + 1 });
    } else if (this.state.slideIndex === this.state.dataSlider.length) {
      this.setState({ slideIndex: 1 });
    }
  };

  prevSlide = () => {
    if (this.state.slideIndex !== 1) {
      this.setState({ slideIndex: this.state.slideIndex - 1 });
    } else if (this.state.slideIndex === 1) {
      this.setState({ slideIndex: this.state.dataSlider.length });
    }
  };

  render() {
    return (
      <div className="container-slider">
        {this.state.dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                this.state.slideIndex === index + 1
                  ? "slide active-anim"
                  : "slide"
              }
            >
              <img alt="" src={obj.data.main_image.url} />
            </div>
          );
        })}
        <SliderNavButton moveSlide={this.nextSlide} direction={"next"} />
        <SliderNavButton moveSlide={this.prevSlide} direction={"prev"} />
      </div>
    );
  }
}
