import "./App.css";
import data from "./data/baby-names-data.json";
import BabyNameList from "./BabyNameList";

function App() {
  return (
    <div className="App">
      <BabyNameList data={data} />
      <hr />
    </div>
  );
}

export default App;
