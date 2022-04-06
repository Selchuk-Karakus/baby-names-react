import React from "react";

const SearchBar = (props) => {
console.log(props)

  return (
    <div>
        <label htmlFor="name">Search:</label>
        <input 
        placeholder="Search Name"
        id="name" 
        type="text" 
        value={props.input}
        onChange={props.handleInputChange} />
    </div>
  );
};

export default SearchBar;
