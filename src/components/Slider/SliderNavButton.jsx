import React from "react";
import "./Slider.css";

function SliderNavButton(props) {
  return (
    <button
      onClick={props.moveSlide}
      className={props.direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {props.direction === "next" ? ">" : "<"}
    </button>
  );  
}

export default SliderNavButton;
