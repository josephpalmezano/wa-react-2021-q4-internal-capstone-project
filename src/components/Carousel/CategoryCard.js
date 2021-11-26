import React from "react";
import "./CategoryCard.css";

export default class CategoryCard extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <>
        {data.map(({ id, data: { main_image, name } }, index) => (
          <div className="carousel-card" key={id}>
            <img src={main_image.url} alt="" />
            <div>
              <h2>{name}</h2>
            </div>
          </div>
        ))}
      </>
    );
  }
}
