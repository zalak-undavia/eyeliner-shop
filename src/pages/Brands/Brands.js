import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlDenyList } from "../../constants";
import "./Brands.css";

export default function Brands() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  const nav = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner"
        );

        const allBrands = response.data
          .filter((p) => p.image_link && !urlDenyList.some((url) => p.image_link.includes(url)))
          .filter((p) => !!p.brand)
          .map((p) => p.brand);
        const uniqueBrands = Array.from(new Set(allBrands));

        setBrands(uniqueBrands);
      } catch (error) {
        console.error("Error fetching the products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  if (loading) {
    return <div className="brands-container">Loading...</div>;
  }

  const specificBrandProduct = (brand) => {
    nav(`/specificBrand?brand=${encodeURIComponent(brand)}`);
  };
  return (
    <div className="brands-container">
      <h1>
        <span style={{ cursor: "pointer" }} onClick={() => nav("/")}>
          Stories Arabia
        </span>{" "}
        | Browse Eyeliners by Brands
      </h1>
      <div className="brands-list">
        {brands.map((brand, index) => (
          <div onClick={() => specificBrandProduct(brand)} key={index} className="card brand-card ">
            <div className="brand-name-container">{brand}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
