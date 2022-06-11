import React from "react";
import Pagination from "./Copmponents/Pagination";
import Search from "./Copmponents/Search";
import Stories from "./Copmponents/Stories";

const App = () => {
  return (
    <>
      <div className="main">
        <h2 className="main-heading">Get All the Tech News</h2>
        <Search />
        <Pagination />
        <Stories />
        <Pagination />
      </div>
    </>
  );
};

export default App;
