import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function HappyBanner(guesses) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guesses.length + 1} guesses</strong>.
      </p>
    </div>
  );
}

function SadBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function Game() {
  let [guesses, setGuesses] = React.useState([]);
  let [gameStatus, setGameStatus] = React.useState("playing");

  if (gameStatus === "playing" && guesses.length === NUM_OF_GUESSES_ALLOWED) {
    setGameStatus("loss");
  }

  function addGuess(guess) {
    if (guess === answer) {
      setGameStatus("won");
    }

    setGuesses([...guesses, guess]);
  }

  let checkedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResults guesses={checkedGuesses} />
      <GuessInput addGuess={addGuess} gameStatus={gameStatus} />
      {gameStatus === "won" && <HappyBanner guesses={guesses} />}
      {gameStatus === "loss" && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
