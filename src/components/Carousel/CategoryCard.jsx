import React from "react";
import "./CategoryCard.css";
import {
  Link
} from "react-router-dom";


function CategoryCard(props) {
  const { data } = props;

  return (
    <>
      {data.map(({ id, data: { main_image, name } }, index) => (
        <div className="carousel-card" key={id}>
          <img src={main_image.url} alt="" />
          <div>
            <Link className="category-name-link" to={{pathname: "/products", search: `?category=${id}`}}>{name}</Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default CategoryCard;
