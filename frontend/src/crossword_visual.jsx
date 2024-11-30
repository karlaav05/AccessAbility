import React from "react";
import "./css/crossword.css";

const CrosswordVisual = () => {
  const acrossClues = [
    "2. People with Visual impairment usually have difficulty —-- oneself in new spaces.",
    "5. Type of blindness that makes it hard to distinguish or see things with clarity.",
    "6. People with Visual impairment have difficulty——— people, objects or spaces.",
  ];

  const downClues = [
    "1. Chronic disease that can cause this disability.",
    "3. Type of blindness where you see nothing at all or have only a slight perception of light.",
    "4. Visual impairment can also be —---- from your family members.",
  ];

  const handleCheck = () => {
    // Placeholder for the crossword validation logic
    console.log("Check button clicked");
  };

  return (
    <div>
      <section>
        <table id="table" cellSpacing="0">
          {/* Placeholder for crossword grid rendering */}
        </table>
        <div className="across">
          <h2>
            <i>Across</i>
          </h2>
          <ul>
            {acrossClues.map((clue, index) => (
              <li key={index}>{clue}</li>
            ))}
          </ul>
        </div>

        <div className="down">
          <h2>
            <i>Down</i>
          </h2>
          <ul>
            {downClues.map((clue, index) => (
              <li key={index}>{clue}</li>
            ))}
          </ul>
        </div>
      </section>

      <button onClick={handleCheck}>CHECK</button>
    </div>
  );
};

export default CrosswordVisual;
