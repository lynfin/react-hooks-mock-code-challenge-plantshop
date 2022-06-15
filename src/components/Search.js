import React, { useState } from "react";
const handleChange = (e) => {
  onNewSearch(e.target.value);
};
function Search({ searchString, onNewSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchString}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
