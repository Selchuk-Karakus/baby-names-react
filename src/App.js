import React, { useState, useEffect } from "react";
import "./App.css";
import babyNamesData from "./data/baby-names-data.json";
import BabyNameList from "./BabyNameList";
import SearchBar from "./SearchBar";
import FavouriteNamesList from "./FavouriteNamesList";
import GenderFilter from "./GenderFilter";

function App() {
  const [inputField, setInputField] = useState("");
  const [favouriteName, setFavouriteName] = useState([]);
  const [filteredBabyNames, setFilteredBabyNames] = useState(babyNamesData);
  const [filteredGender, setFilteredGender] = useState("b");

  useEffect(() => {
    const babyNames = babyNamesData
      .sort((personA, personB) => {
        return personA.name > personB.name ? 1 : -1;
      })
      .filter((babyData) => {
        return (
          babyData.name.toLowerCase().indexOf(inputField.toLowerCase()) !== -1
        );
      })
      .filter((babyName) => {
        return !favouriteName.includes(babyName);
      })
      .filter((babyData) => {
        return babyData.sex !== filteredGender;
      });

    setFilteredBabyNames(babyNames);
  }, [inputField, favouriteName, filteredGender]);

  const handleInputFieldOnChange = (e) => {
    e.preventDefault();
    setInputField(e.target.value);
  };

  const handleAddNameToFavClick = (babyName) => {
    if (!favouriteName.includes(babyName))
      setFavouriteName([...favouriteName, babyName]);
  };

  const handleRemoveNameFromFavClick = (babyName) => {
    setFavouriteName(
      favouriteName.filter((favName) => {
        return favName.id !== babyName.id;
      })
    );
  };

  const handleGenderInputOnChange = (e) => {
    setFilteredGender(e.target.value);
  };

  return (
    <div className="App">
      <GenderFilter
        gender={filteredGender}
        handleOnchange={handleGenderInputOnChange}
      />
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
