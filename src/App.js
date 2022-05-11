import React, { useState, useEffect } from "react";
import "./App.css";
import babyNamesData from "./data/baby-names-data.json";
import BabyNameList from "./BabyNameList";
import SearchBar from "./SearchBar";
import FavouriteNamesList from "./FavouriteNamesList";

function App() {
  const [inputField, setInputField] = useState("");
  const [favouriteName, setFavouriteName] = useState([]);

  const filteredBabyNames = babyNamesData
    .sort((personA, personB) => {
      return personA.name > personB.name ? 1 : -1;
    })
    .filter((babyData) => {
      return (
        babyData.name.toLowerCase().indexOf(inputField.toLowerCase()) !== -1
      );
    });
  
  const handleInputFieldOnChange = (e) => {
    e.preventDefault();
    setInputField(e.target.value);
  };

  const handleAddNameToFavClick = (babyName) => {
    if (!favouriteName.includes(babyName.id))
      setFavouriteName([...favouriteName, babyName]);
  };

  const handleRemoveNameFromFavClick = (babyName) => {
    setFavouriteName(
      favouriteName.filter((favName) => {
        return favName.id !== babyName.id;
      })
    );
  };

  return (
    <div className="App">
      <SearchBar handleOnChange={handleInputFieldOnChange} input={inputField} />
      <FavouriteNamesList
        data={favouriteName}
        removeFavName={handleRemoveNameFromFavClick}
      />
      <BabyNameList
        data={filteredBabyNames}
        handleClick={handleAddNameToFavClick}
      />
      <hr />
    </div>
  );
}

export default App;
