import React, { useState, useEffect } from "react";
import "./App.css";
import dataFile from "./data/baby-names-data.json";
import BabyNameList from "./BabyNameList";
import SearchBar from "./SearchBar";

function App() {
  const [input, setInput] = useState("");
  const [namesData] = useState([...dataFile]);
  const [filteredNames, setFilteredNames] = useState([]);

  namesData.sort((personA, personB) => {
      return personA.name > personB.name ? 1 : -1
    })

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  useEffect(() => {
    setFilteredNames(
      namesData.filter((person) => {
        return person.name.toLowerCase().match(input);
      })
    );
  }, [input]);

  return (
    <div className="App">
      <SearchBar handleChange={handleChange} input={input} />
      <BabyNameList data={filteredNames} />
      <hr />
    </div>
  );
}

export default App;
