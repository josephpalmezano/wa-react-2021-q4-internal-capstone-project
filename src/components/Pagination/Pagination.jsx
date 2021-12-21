import React from 'react';
import "./Pagination.css";

const Pagination = ({ thumbsPerPage, totalThumbs, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalThumbs / thumbsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav>
        <ul className="pagination-nav">
          {pageNumbers.map(number => (
            <li key={number}  className='page-link'>
              <a onClick={(event) => paginate(event, number)} href='!#'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </> 
  );
};

export default Pagination;