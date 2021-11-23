import React from "react";
import "./Slider.css";

export default class SliderNavButton extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.moveSlide}
        className={this.props.direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        {this.props.direction === "next" ? ">" : "<"}
      </button>
    );  
  }
}
