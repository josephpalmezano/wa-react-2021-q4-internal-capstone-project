import React, {useState} from "react";
import "./Slider.css";
import SliderNavButton from "./SliderNavButton.jsx";
import FeaturedBanners from "../../mocks/en-us/featured-banners.json";
import useFeaturedBanners from "../../utils/hooks/useFeaturedBanners.js";

function Slider(props) {
  const [slideIndex, setSlideIndex] = useState(1);
  const [dataSlider] = useState(FeaturedBanners.results);
  const featured = useFeaturedBanners()
  console.log(featured)
  
  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1 );
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };
  
  return (
    <React.Fragment>
      {featured.isLoading ? (
        <div>Loading...</div>
      ) : (
      <div className="container-slider">
        {featured.data.results.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1
                  ? "slide active-anim"
                  : "slide"
              }
            >
              <img alt="" src={obj.data.main_image.url} />
            </div>
          );
        })}
        <SliderNavButton moveSlide={nextSlide} direction={"next"} />
        <SliderNavButton moveSlide={prevSlide} direction={"prev"} />
      </div>
      )}
      </React.Fragment>
  );
}

export default Slider;
