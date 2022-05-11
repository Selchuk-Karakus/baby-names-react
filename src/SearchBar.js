import React from "react";

const SearchBar = ({handleOnChange, input}) => {

  return (
    <div className="searchBar-wrapper">
        <label className="searchBar-label" htmlFor="name">Search:</label>
        <input 
        className="searchBar-inputField"
        placeholder="Search Name"
        id="name" 
        type="text" 
        value={input}
        onChange={handleOnChange} />
    </div>
  );
};

export default SearchBar;
