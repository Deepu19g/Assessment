import logo from "./logo.svg";
import "./App.css";
import Input from "./Components/Input/Input";
import Chip from "./Components/Chip/Chip";
import { useState } from "react";
import jsonData from "./data/data.json";

function App() {
  const [chipItems, setchipItems] = useState([]);
  const [listofData, setlistofData] = useState(jsonData);
  const [highlightedChipIndex, setHighlightedChipIndex] = useState(null);

  const dataToBePassed = {
    listofData,
    setchipItems,
    chipItems,
    setlistofData,
    jsonData,
    highlightedChipIndex,
    setHighlightedChipIndex,
  };

  return (
    <div className="App">
      <Chip data={dataToBePassed}></Chip>
      <Input data={dataToBePassed}></Input>
    </div>
  );
}

export default App;
