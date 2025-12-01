import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, idx) => (
        <p className="guess" key={idx}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
