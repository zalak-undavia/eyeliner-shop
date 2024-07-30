import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./SpecificBrand.css";

export default function SpecificBrand() {
  const [params, setSearchParams] = useSearchParams();
  const [brandName, setBrandName] = useState([]);
  const nav = useNavigate();
  const selectedBrandName = params.get("brand") || "";

  useEffect(() => {
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${selectedBrandName}&product_type=eyeliner`;

    const asyncFun = async () => {
      const request = await fetch(url);
      const response = await request.json();
      setBrandName(response);
    };

    asyncFun();
  }, [selectedBrandName]);

  const goToIndividualProduct = (v) => {
    nav(`/specific-product?id=${v.id}&name=${v.name}`);
  };

  return (
    <div className="specific-brand-container">
      <h1>
        <span style={{ cursor: "pointer" }} onClick={() => nav("/")}>
          Stories Arabia
        </span>{" "}
        | Browse Eyeliners from {selectedBrandName}
      </h1>
      <div className="specific-brand-list">
        {brandName.map((v, i) => {
          return (
            <div onClick={() => goToIndividualProduct(v)} className="card">
              <img src={v.image_link}></img>
              <div className="product-details-card">
                <strong>{v.name}</strong>
                <div>
                  <span className="makeBold-doller">
                    $ <span>{v.price}</span>
                  </span>{" "}
                  | <span>{v.category}</span>
                </div>
                <div className="rating-colors-container">
                  <i class="bi bi-star-fill" />
                  <span>{v.rating || 4.2}</span>
                  <div className="fill"></div>
                  <span className="product-colors-container">
                    {v.product_colors.map((c) => (
                      <span
                        className="product-color"
                        title={c.colour_name}
                        style={{ background: c.hex_value }}
                      ></span>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
