import React from "react";
import "../css/Home.css";
import landing from "../assets/landing.png";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="content">
          <div className="left">
            <img src={landing} alt="Image" />
          </div>
          <div className="right">
            <h2>
              welcome to{" "}
              <span>
                MS<span className="shadow">K</span>art
              </span>
            </h2>
            <p>
              MSKart is an e-commerce website that allows users to purchase
              products online. The website offers a wide range of products,
              including electronics, clothing, and accessories. Users can browse
              the website
            </p>

            <button className="cta">
              <span>Shop Now</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
