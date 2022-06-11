import React from "react";
import { useGlobalContext } from "../Context";

const Search = () => {
  const {query,ItemChange} = useGlobalContext();
  return (
    <>
      <form>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search news"
          value={query}
          onChange={(e)=>ItemChange(e.target.value)}
        />
      </form>
    </>
  );
};

export default Search;
