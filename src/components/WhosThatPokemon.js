import React, { useState } from "react";

import template from "../img/whosthatpokemontemplate.png";
import caterpie from "../img/caterpie.png";
import koffing from "../img/koffing.png";
import pikachu from "../img/pikachu.png";
import styles from "../css/WhosThatPokemon.module.css";

const WhosThatPokemon = (props) => {
  const [guess, setGuess] = useState("");
  const [filledPokemon, setFilledPokemon] = useState("");
  const [showFilled, setShowFilled] = useState(false);

  const validGuesses = ["koffing", "caterpie", "pikachu"];

  const guessHandler = (e) => {
    setGuess(e.target.value);
  };

  const guessBtnSubmit = () => {
    if (
      validGuesses.includes(guess) &&
      props.randImg.includes(guess) &&
      guess.toLowerCase() === "pikachu"
    ) {
      setFilledPokemon(pikachu);
      setShowFilled(true);
    } else if (
      validGuesses.includes(guess) &&
      props.randImg.includes(guess) &&
      guess.toLowerCase() === "koffing"
    ) {
      setFilledPokemon(koffing);
      setShowFilled(true);
    } else if (
      validGuesses.includes(guess) &&
      props.randImg.includes(guess) &&
      guess.toLowerCase() === "caterpie"
    ) {
      setFilledPokemon(caterpie);
      setShowFilled(true);
    }
  };

  return (
    <div>
      <img src={template} className={styles.template} />
      <img src={props.randImg} className={styles.sil} />
      {showFilled && <img src={filledPokemon} className={styles.filled} />}
      <div className={styles.inputContainer}>
        <p className={styles.label}>Guess Here</p>
        <input
          onChange={guessHandler}
          className={styles.input}
          id="guess"
          type="text"
        />
        <button onClick={guessBtnSubmit} className={styles.button}>
          Guess!
        </button>
      </div>
    </div>
  );
};

export default WhosThatPokemon;
