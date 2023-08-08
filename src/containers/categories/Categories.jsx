import React, { useState, useEffect } from "react";
import axios from "axios";
import "./categories.css";
import { Category } from "../../Components";
import news from "../../assests/news.jpeg";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  // const baseURL = "../../assests/";
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getCategories")
      .then((res) => {
        console.log(res);
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="section__padding categories__wrapper">
      {categories.map((category) => (
        <Category
          key={category.id}
          imgUrl={news}
          description={category.title}
        />
      ))}
    </div>
  );
};

export default Categories;
