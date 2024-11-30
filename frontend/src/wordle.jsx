import React, { useState } from 'react';
import './css/worlde.css';

const WordleGame = ({ type, solution, tries }) => {
  const [guess, setGuess] = useState('');
  const [submittedGuesses, setSubmittedGuesses] = useState([]);
  const [retry, setRetry] = useState(false);

  const handleSubmit = () => {
    setSubmittedGuesses([...submittedGuesses, guess]);
    setGuess('');
  };

  const handleRetry = () => {
    setSubmittedGuesses([]);
    setRetry(true);
    setGuess('');
  };

  return (
    <div className="container">
      <h1>Wordle {type}</h1>
      <div className="board">
        {Array.from({ length: tries }).map((_, rowIndex) => (
          <div key={rowIndex} className="row" id={`id${rowIndex}`}>
            {solution.split('').map((letter, cellIndex) => (
              <div key={cellIndex} className="cell"></div>
            ))}
          </div>
        ))}
      </div>
      <input
        type="text"
        id="guessInput"
        maxLength={solution.length}
        placeholder="Type your guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        autoFocus
      />
      <button id="submitButton" onClick={handleSubmit}>
        Submit Guess
      </button>
      <button id="retryButton" onClick={handleRetry} hidden={retry}>
        Retry
      </button>

      {submittedGuesses.length > 0 && (
        <div>
          <h2>Submitted Guesses:</h2>
          <ul>
            {submittedGuesses.map((guess, index) => (
              <li key={index}>{guess}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WordleGame;
