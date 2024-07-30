import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import { urlDenyList } from "../../constants";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner"
        );

        const productsToUse = response.data.filter(
          (p) => p.image_link && !urlDenyList.some((url) => p.image_link.includes(url))
        );

        setProducts(productsToUse);
      } catch (error) {
        console.error("Error fetching the products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image_link}></img>
          <div>
            <b>{product.brand}</b>
          </div>
          <div>{product.name}</div>
          <div>{product.category}</div>
        </div>
      ))}
    </div>
  );
}
