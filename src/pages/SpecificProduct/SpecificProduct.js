import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./SpecificProduct.css";
import TestimonialsList from "../../components/Testimonials/Testimonials";

const Product = ({ product }) => {
  return (
    <div className="product-container">
      <div className="product-left">
        <img src={product.image_link} alt={product.name} className="product-image" />
        <div className="product-info">
          <p>
            <strong>{product.name}</strong> by {product.brand}
          </p>
          <p>
            <strong>Price:</strong> {product.price_sign}
            {product.price} {product.currency}
          </p>
          <p>
            <strong>Rating:</strong>{" "}
            {product.rating ? `${product.rating} ⭐` : "No rating available"}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <a className="buy-now-button" href="#" rel="noopener noreferrer">
            Buy Now
          </a>
        </div>
      </div>
      <div className="product-right">
        <p
          className="product-description"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></p>
        {product.product_colors && product.product_colors.length !== 0 && (
          <>
            <p>
              <strong>Available Colors:</strong>
            </p>
            <span className="product-colors-container">
              {product.product_colors.map((c) => (
                <span
                  className="product-color"
                  title={c.colour_name}
                  style={{ background: c.hex_value }}
                ></span>
              ))}
            </span>
          </>
        )}
        <div className="product-testimonials">
          <strong>Testimonials:</strong>
          <TestimonialsList />
        </div>
      </div>
    </div>
  );
};

export default function SpecificProduct() {
  const [product, setProduct] = useState(null);
  const [searchParams] = useSearchParams();
  const nav = useNavigate();
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  useEffect(() => {
    if (id) {
      axios
        .get(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner`)
        .then((response) => {
          const product = response.data.find((t) => t.id === +id);

          setProduct(product);
        })
        .catch((error) => {
          console.error("Error fetching the product data:", error);
        });
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="specific-product-container">
      <h1>
        <span style={{ cursor: "pointer" }} onClick={() => nav("/")}>
          Stories Arabia
        </span>{" "}
        | {name}
      </h1>
      <div>
        <Product product={product} />
      </div>
    </div>
  );
}
