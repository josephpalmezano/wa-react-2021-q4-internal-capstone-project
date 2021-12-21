import "./App.css";
import Header from "../src/components/Header/Header.jsx";
import Footer from "../src/components/Footer/Footer.js";
import Home from "../src/components/Home/Home.jsx";
import ProductsList from "../src/components/Products/ProductsList.jsx";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ProductDetailPage from "./components/Products/ProductDetailPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="products" element={<ProductsList />}/>
          <Route path="detail/:id" element={<ProductDetailPage />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
