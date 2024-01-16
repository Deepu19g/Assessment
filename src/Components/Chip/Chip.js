import "./Chip.css";
import CrossImage from "../../assets/cross.jpg";

function Chip({ data }) {
  const {
    chipItems,
    setchipItems,
    setlistofData,
    listofData,
    highlightedChipIndex,
  } = data;

  function handleClick(itm) {
    setchipItems(chipItems.filter((item) => item != itm));
    setlistofData([...listofData, itm]);
  }

  return (
    <div className="ChipContainer">
      {chipItems &&
        chipItems.map((itm, index) => (
          <div
            key={index}
            className={
              highlightedChipIndex === index ? "highlighted-chip" : "chipItem"
            }
          >
            {itm.name}
            <img
              src={CrossImage}
              className="Image"
              onClick={() => handleClick(itm)}
            ></img>
          </div>
        ))}
    </div>
  );
}

export default Chip;
