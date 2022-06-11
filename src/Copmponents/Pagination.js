import React from "react";
import { useGlobalContext } from "../Context";
import './stories.css';

const Pagination = () => {
  const {page,nbpages,getPrevPage,getNextPage} = useGlobalContext();
  return (
    <>
    <div className="pagination">
      <button className="prev" onClick={()=>getPrevPage()}>Prev</button>
      <p> Page {page + 1} of {nbpages}</p>
  <button className="next" onClick={()=>getNextPage()}>Next</button>
    </div>
  </>
  );
};

export default Pagination;
