import "./App.css";
import Footer from "./components/Footer/Footer";
import Brands from "./pages/Brands/Brands";
import Landing from "./pages/Landing/Landing";
import Products from "./pages/Products/Products";
import SpecificBrand from "./pages/SpecificBrand/SpecificBrand";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SpecificProduct from "./pages/SpecificProduct/SpecificProduct";

function App() {
  return (
    <div className="App">
      <div className="router-outlet">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/explore" element={<Products />} />
          <Route path="/specificBrand" element={<SpecificBrand />} />
          <Route path="/specific-product" element={<SpecificProduct />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
