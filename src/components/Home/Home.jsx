import Slider from "../Slider/Slider.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import ProductGrid from "../Products/ProductGrid.jsx";
function Home() {
  return (
    <div className="App">
      <Slider/>
      <div style={{ padding: "18px" }}>
        <h1>Categories</h1>
        <Carousel></Carousel>
      </div>
      <div style={{padding: "18px" }}>
        <h1>Featured Products</h1>
        <ProductGrid></ProductGrid>
      </div>
    </div>
  );
}

export default Home;
