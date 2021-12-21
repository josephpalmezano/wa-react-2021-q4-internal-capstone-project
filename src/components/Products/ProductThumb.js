import React from "react";
import "./ProductThumb.css";

export default class ProductThumb extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <>
        {data.map((obj, index) => (
          <div className="thumb-unit" key={obj.id}>
            <div className="heading">
              <span>${obj.data.price}</span>
            </div>
            <div className="box">
              <img alt="" src={obj.data.mainimage.url} />
            </div>
            <div className="info">
              <p>{obj.data.name}</p>
              <span className="cart-icon">&#128722;</span>
            </div>
          </div>
        ))}
      </>
    );
  }
}
