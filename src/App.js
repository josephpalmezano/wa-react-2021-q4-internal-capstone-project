import "./App.css";
import Header from "../src/components/Header/Header.js";
import Footer from "../src/components/Footer/Footer.js";
import Slider from "../src/components/Slider/Slider.js";
import Carousel from "../src/components/Carousel/Carousel.js";
import ProductGrid from "../src/components/Products/ProductGrid.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <div style={{ padding: "18px" }}>
        <h1>Categories</h1>
        <Carousel></Carousel>
      </div>
      <div style={{ marginTop: "15%", padding: "18px" }}>
        <h1>Featured Products</h1>
        <ProductGrid></ProductGrid>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
