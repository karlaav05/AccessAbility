import React from "react";
import "./css/crossword.css"; 

const Crossword = () => {
  // Replace with your actual logic from `crossword_cognitive.js`
  const keyCheck = () => {
    console.log("Key Check function triggered.");
  };

  return (
    <div>
      <section>
        <table id="table" cellSpacing="0"></table>
        <div className="across">
          <h2>
            <i>Across</i>
          </h2>
          <ul>
            <li>
              3. —- diagnoses include dementia, traumatic brain injury, Down
              syndrome, and autism.
            </li>
            <li>
              5. Cognitive impairment can come and go. This is often called
              —---
            </li>
            <li>6. cognitive accessibility, for short</li>
          </ul>
        </div>

        <div className="down">
          <h2>
            <i>Down</i>
          </h2>
          <ul>
            <li>1. disabilities are the most common disability type.</li>
            <li>
              2. Cognitive disabilities are classified as clinical or —-----.
            </li>
            <li>
              3. More subtle cognitive disabilities are rooted in brain
              structure or —-
            </li>
          </ul>
        </div>
      </section>

      <button onClick={keyCheck}>CHECK</button>
      {/* Uncomment if you plan to use it */}
      {/* <button onClick={colorClear}>Erase the wrongs</button> */}
    </div>
  );
};

export default Crossword;
