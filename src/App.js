import "./App.css";
import Header from "../src/components/Header/Header.jsx";
import Footer from "../src/components/Footer/Footer.js";
import Slider from "../src/components/Slider/Slider.jsx";
import Carousel from "../src/components/Carousel/Carousel.jsx";
import ProductGrid from "../src/components/Products/ProductGrid.jsx";

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <div style={{ padding: "18px" }}>
        <h1>Categories</h1>
        <Carousel></Carousel>
      </div>
      <div style={{padding: "18px" }}>
        <h1>Featured Products</h1>
        <ProductGrid></ProductGrid>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
