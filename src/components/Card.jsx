import React from "react";
import "../css/Card.css";
const Card = ({ title, description, price }) => {
  return (
    <>
      <div className="card">
        <div className="image">
          <img src="../../public/mobile.jpeg" alt="My Image" />
        </div>
        <div className="card-body">
          <h2 className="card-title">Card Title : {title}</h2>
          <p className="card-text">description: {description}</p>
          <h3>Price: {price}</h3>
        </div>

        <div className="card-btn">
          <button className="btn">Add to cart</button>
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default Card;
