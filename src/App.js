import React, {useState} from "react";
import "./App.css";
import data from "./data/baby-names-data.json";
import BabyNameList from "./BabyNameList";
import SearchBar from "./SearchBar";

function App() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value.toLowerCase());
  };

  if (input.length > 0) {
    data = data.filter((person) => {
      return person.name.toLowerCase().match(input);
    });
  }
   
  return (
    <div className="App">
      <SearchBar data={data} handleInput={handleChange} input={input}/>
      <BabyNameList data={data} />
      <hr />
    </div>
  );
}

export default App;
