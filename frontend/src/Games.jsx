import React from "react";
import { Link } from "react-router-dom"; // Assuming React Router is used for navigation
import "./css/games.css";

const Games = () => {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <h1>GAMES</h1>
      <h2>Ready to test your knowledge?</h2>

      {/* Physical Games Section */}
      <section id="physical-games">
        <h2>Physical</h2>
        <div className="button-container">
          <Link className="ah" to="/crossword-physical">
            Crossword
          </Link>
          <Link className="ah" to="/wordle-physical">
            Guess the Word
          </Link>
        </div>
      </section>

      {/* Cognitive Games Section */}
      <section id="cognitive-games">
        <h2>Cognitive</h2>
        <div className="button-container">
          <Link className="ah" to="/crossword-cognitive">
            Crossword
          </Link>
          <Link className="ah" to="/wordle-cognitive">
            Guess the Word
          </Link>
        </div>
      </section>

      {/* Visual Games Section */}
      <section id="visual-games">
        <h2>Visual</h2>
        <div className="button-container">
          <Link className="ah" to="/crossword-visual">
            Crossword
          </Link>
          <Link className="ah" to="/wordle-visual">
            Guess the Word
          </Link>
        </div>
      </section>

      {/* Home Button */}
      <Link to="/">
        <img
          src="img/homee.png"
          style={{ position: "absolute", top: "30px", right: "30px" }}
          width="80px"
          height="80px"
          alt="Home"
        />
      </Link>
    </div>
  );
};

export default Games;
