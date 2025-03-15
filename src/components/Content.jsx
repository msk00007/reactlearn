import React from "react";
import "../css/Content.css";
import Card from "./Card";

const Content = () => {
  const myArr = [
    {
      id: 1,
      title: "Mobile",
      description: "This is a mobile",
      price: 10000,
    },
    {
      id: 2,
      title: "Laptop",
      description: "This is a laptop",
      price: 50000,
    },
    {
      id: 3,
      title: "Tablet",
      description: "This is a tablet",
      price: 15000,
    },
    {
      id: 4,
      title: "Smartwatch",
      description: "This is a smartwatch",
      price: 5000,
    },
  ];

  return (
    <div className="main">
      {myArr.map((product) => {
        return (
          <Card
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default Content;
