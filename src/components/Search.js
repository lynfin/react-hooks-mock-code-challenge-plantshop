import React, { useState } from "react";
function Search({ searchString, onNewSearch }) {
  const handleChange = (e) => {
    onNewSearch(e.target.value);
  };

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
