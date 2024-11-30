import React from "react";
import "./css/crossword.css"; // Import CSS file

const CrosswordPhysical = () => {
  // Placeholder for the `key_check` logic (you can replace this with your actual logic)
  const keyCheck = () => {
    console.log("CHECK button clicked");
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
              2. A physical disability is a substantial and long-term limitation
              affecting a person’s --------.
            </li>
            <li>
              5. Factors are such as genetic disorder, a specific condition or
              ------.
            </li>
            <li>
              6. More than a minor or trivial impact, such as taking
              significantly longer to complete daily activities like getting
              dressed.
            </li>
          </ul>
        </div>
        <div className="down">
          <h2>
            <i>Down</i>
          </h2>
          <ul>
            <li>
              1. Accepting people for who they are, the ability to understand
              and share the feelings of another.
            </li>
            <li>3. Where a part of the body is surgically removed.</li>
            <li>4. Conditions lasting 12 months or more.</li>
          </ul>
        </div>
      </section>
      <button onClick={keyCheck}>CHECK</button>
      <script type="text/javascript" src="./crossword_physical_script.js"></script>
    </div>
  );
};

export default CrosswordPhysical;