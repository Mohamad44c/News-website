import React from "react";
import "./category.css";
import CTA from "../cta/CTA";
const Category = (props) => {
  return (
    <div>
      <div className="responsive">
        <div className="gallery">
          <img
            src={props.imgUrl}
            alt="news category"
            width="600"
            height="400"
          />
          <div className="info">
            <div className="desc">{props.description}</div>
            <CTA background="#2FA585" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
