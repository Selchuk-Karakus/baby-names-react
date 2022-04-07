import React from "react";

const SearchBar = ({handleChange, input}) => {

  return (
    <div className="searchBar-wrapper">
        <label className="searchBar-label" htmlFor="name">Search:</label>
        <input 
        className="searchBar-inputField"
        placeholder="Search Name"
        id="name" 
        type="text" 
        value={input}
        onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
