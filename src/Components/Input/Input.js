import { useState, useEffect } from "react";
import "./Input.css";
import Chip from "../Chip/Chip";
import Avatar from "../../assets/avatar.png";

function Input({ data }) {
  const {
    setlistofData,
    setchipItems,
    chipItems,
    jsonData,
    listofData,
    setHighlightedChipIndex,
    highlightedChipIndex,
  } = data;

  const [visible, setvisible] = useState(false);
  const [inputvalue, setinputvalue] = useState("");

  useEffect(() => {
    const handleBackspace = (event) => {
      if (
        event.key === "Backspace" &&
        inputvalue === "" &&
        chipItems.length > 0
      ) {
        // Highlight the last chip when backspace is pressed and input is empty
        if (highlightedChipIndex !== null) {
          // If a chip is highlighted, remove it on the second backspace press
          handleRemoveChip(highlightedChipIndex);
        } else {
          // Highlight the last chip when backspace is pressed and input is empty
          setHighlightedChipIndex(chipItems.length - 1);
        }
      }
    };

    window.addEventListener("keydown", handleBackspace);

    return () => {
      window.removeEventListener("keydown", handleBackspace);
    };
  }, [inputvalue, chipItems, highlightedChipIndex]);

  function handleClick() {
    setvisible(true);
  }

  function handleClickItem(item) {
    setchipItems([...chipItems, item]);
    var temp = listofData;
    setHighlightedChipIndex(null);
    setlistofData(listofData.filter((existing) => existing.name != item.name));
  }

  function handleRemoveChip(index) {
    const updatedChips = [...chipItems];
    const removedChip = updatedChips.splice(index, 1);

    setchipItems(updatedChips);
    setlistofData([...listofData, ...removedChip]);
    setHighlightedChipIndex(null);
  }

  function handleSearch(e) {
    setinputvalue(e.target.value);
    setlistofData(
      listofData.filter((item) =>
        item.name.toLowerCase().includes(e.target.value)
      )
    );
    if (e.target.value === "") {
      RemainderList();
    }
    setHighlightedChipIndex(null);
  }

  function RemainderList() {
    const namesSet = new Set(chipItems.map((item) => item.name));

    const subtractedItems = jsonData.filter((item) => !namesSet.has(item.name));

    setlistofData(subtractedItems);
  }

  return (
    <div className="Input">
      <input
        type="text"
        onClick={handleClick}
        onChange={handleSearch}
        value={inputvalue}
        className="inputField"
        placeholder="Add new user.."
      ></input>
      {visible && (
        <ul className="listContainer">
          {listofData.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClickItem(item)}
              className="nameitem"
            >
              <span className="InputSpanitems">
                <img src={Avatar} className="Avatar"></img>
              </span>
              <span className="InputSpanitems">{item.name}</span>
              <span className="InputSpanitems">{item.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Input;
