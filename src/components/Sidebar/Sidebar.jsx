import React, { useState } from "react";
import "./Sidebar.css";
import Categories from "../../mocks/en-us/product-categories.json";

function Sidebar(props) {
  const [data] = useState(Categories.results);
  return (
    <>
      <div className="sidebar">
        <ul>
          {data.map((obj, index) => (
            <li key={obj.id} onClick={()=> props.setSelectedCategory(obj.id)}>
              {obj.data.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown-sidebar center">Categories</div>
    </>
  );
}

export default Sidebar;