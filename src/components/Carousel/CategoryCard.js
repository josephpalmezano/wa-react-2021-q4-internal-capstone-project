import React from "react";
import "./CategoryCard.css";

export default class CategoryCard extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <>
        {data.map((obj, index) => (
          <div className="carousel-card" key={obj.id}>
            <img src={obj.data.main_image.url} alt="" />
            <div>
              <h2>{obj.data.name}</h2>
            </div>
          </div>
        ))}
      </>
    );
  }
}
