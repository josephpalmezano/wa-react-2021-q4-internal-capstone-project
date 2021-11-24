import "./App.css";
import Header from "../src/components/Header/Header.js";
import Footer from "../src/components/Footer/Footer.js";
import Slider from "../src/components/Slider/Slider.js";
import Carousel from "../src/components/Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <div style={{padding:"18px"}}>
        <h1>Categories</h1>
        <Carousel></Carousel>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
