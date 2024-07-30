import { useEffect, useState } from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import { urlDenyList } from "../../constants";

// urlDenyList

export default function Footer() {
  const [data, setData] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const asyncFun = async () => {
      try {
        const request = await fetch(
          "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner"
        );
        const response = await request.json();
        setData(response);
      } catch (e) {
        console.log("error", e);
      }
    };

    asyncFun();
  }, []);

  const popularSearchSection = () => {
    const nonReapeatBrand = data
      .filter((p) => p.image_link && !urlDenyList.some((url) => p.image_link.includes(url)))
      .filter((p) => !!p.brand)
      .map((v) => {
        return v.brand;
      })
      .filter((v) => v !== null);

    const newBrandsArr = [...new Set(nonReapeatBrand)];

    const goTocategory = (v) => {
      window.scroll(0, 0);
      nav(`specificBrand?brand=${encodeURIComponent(v)}`);
    };

    const popularSearchItems = () => {
      return (
        <div className="all-brands-in-linein-footer">
          {newBrandsArr.map((v, i) => {
            return (
              <div key={i} onClick={() => goTocategory(v)} className="product-name-in-footer">
                {v} |
              </div>
            );
          })}
        </div>
      );
    };
    return (
      <div>
        <div className="popular-searches">
          <span className="pop-text" style={{ fontSize: "22px", fontWeight: "bold" }}>
            POPULAR SEARCHES
          </span>
          <div className="all-brands-in-footer">{popularSearchItems()}</div>
        </div>
      </div>
    );
  };

  const footerEnd = () => {
    return <div className="footer-end fira">© 2024 | Stories Arabia | All rights reserved</div>;
  };

  const keepInTouchFun = () => {
    return (
      <div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "22px",
            marginTop: "30px",
            wordSpacing: "2px",
          }}
        >
          EXPERIENCE STORIES ARABIA ON MOBILE
        </div>
        <div className="buttons-in-footer">
          <div className="play-store-btn-ff"></div>
          <div className="app-store-btn"></div>
        </div>
        <div className="keep-in-touch-icons" style={{ fontWeight: "bold", marginTop: "50px" }}>
          KEEP IN TOUCH
          <div className="footer-icons-container">
            <i className="bi bi-facebook common-class"></i>
            <i className="bi bi-twitter common-class"></i>
            <i className="bi bi-youtube common-class"></i>
            <i className="bi bi-instagram common-class"></i>
          </div>
        </div>
      </div>
    );
  };
  const freeDelivery = () => {
    return (
      <div>
        <div className="main-container-free-delivery">
          <div className="first-sec-free-delivery">
            <img
              className="footer-delivery-img-1"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvcpos87HinX8QEBYAb7E_IrKDD8D20jQwQ&usqp=CAU"
            ></img>
            <div style={{ alignSelf: "center" }}>
              <span style={{ fontWeight: "bold" }}>100% ORIGINAL guarantee </span>
              for <br /> all products at Stories Arabia
            </div>
          </div>

          <div className="sec-section-free-delivery">
            <img
              className="footer-delivery-img-2"
              src="https://cdn.shopify.com/s/files/1/0299/8563/6396/files/14dayreturns_240x240.jpg?v=1612703450"
            ></img>
            <div style={{ alignSelf: "center" }}>
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Return within <br /> 14days{" "}
              </span>
              of receiving your order
            </div>
          </div>

          <div className="third-section-free-delivery">
            <img
              className="footer-delivery-img-3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9axebz3YDIkci_iDufm5qEe6gsaSB3ZfdN7C9BMspXdiNKGUeOMyiRI5Iaza6g_kD8Ts&usqp=CAU"
            ></img>
            <div style={{ alignSelf: "center" }}>
              <span style={{ fontWeight: "bold" }}>Get free delivery </span>
              on
              <br />
              every order!
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="footer">
      <div className="footer-main-content">
        <div className="upper-footer-container">
          <div className="keep-in-touch-conatiner">{keepInTouchFun()}</div>
          <div className="free-delivery-section">{freeDelivery()}</div>
        </div>
        <div>{popularSearchSection()}</div>
        <div>{footerEnd()}</div>
      </div>
    </div>
  );
}
