import React, { useState } from "react";

function Search({ searchString, onNewSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchString}
        onChange={onNewSearch}
      />
    </div>
  );
}

export default Search;
