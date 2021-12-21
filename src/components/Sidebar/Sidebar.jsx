import React from "react";
import "./Sidebar.css";
import useProductCategories from "../../utils/hooks/useProductCategories.js";

function Sidebar(props) {
  const categories = useProductCategories();
  console.log(props)
  return (
    <React.Fragment>
      {categories.isLoading ? (
        <div>Loading...</div>
      ) : (
      <>
        <div className="sidebar">
          <ul>
            {categories.data.results.map((obj, index) => (
              <li key={obj.id} onClick={()=> props.setSelectedCategory(obj.id)}>
                {obj.data.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="dropdown-sidebar center">Categories</div>
      </>
      )}
    </React.Fragment>
  );
}

export default Sidebar;