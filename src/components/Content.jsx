import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../css/Content.css";
import Card from "./Card";

const Content = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="content-main">
      {data.length > 0 &&
        data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
    </div>
  );
};

export default Content;
