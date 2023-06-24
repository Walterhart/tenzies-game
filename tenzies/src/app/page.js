"use client";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Dice from "@/components/Dice";
import styles from "../styles/page.module.css";

export default function Home() {
  const [dices, setDices] = useState([]);
  const [hasWon, setHasWon] = useState(false);
  const min = 0;
  const max = 10;

  useEffect(() => {
    setDices(getRandomDiceArray());
  }, []);

  useEffect(() => {
    const allDiceHold = dices.every((die) => die.isHold);
    const [firstValue, ...restValues] = dices.map((dice) => dice.value);
    const allSameValue = restValues.every((value) => value === firstValue);

    if (allDiceHold && allSameValue) {
      setHasWon(true);
      console.log("You won!");
    }
  }, [dices]);

  const getRandomDiceArray = () => {
    const randomDiceArray = Array(10)
      .fill()
      .map(() => generateRandomDices());

    return randomDiceArray;
  };

  const generateRandomDices = () => {
    return {
      value: Math.floor(Math.random() * (max - min + 1)) + min,
      isHold: false,
      id: nanoid(),
    };
  };

  const reRollDices = () => {
    setDices((prevDices) =>
      prevDices.map((dice) => (dice.isHold ? dice : generateRandomDices()))
    );
  };

  const holdDice = (id) => {
    setDices((prevDice) =>
      prevDice.map((dice) =>
        dice.id === id ? { ...dice, isHold: !dice.isHold } : dice
      )
    );
  };

  const dicesElement = dices.map((num) => (
    <div key={num.id} className={styles["dice--box"]}>
      <Dice
        value={num.value}
        isHold={num.isHold}
        holdDice={() => holdDice(num.id)}
      />
    </div>
  ));

  const resetGame = () => {
    setHasWon(false);
    setDices(getRandomDiceArray());
  };

  return (
    <main className={styles.main}>
      <div className={styles["main--content"]}>
        <h2>Tenzies</h2>
        <p>Roll all the dice and hold any desired dice for the next roll. Continue rolling and holding until all dice show the same value or choose to hold all dice to win.</p>
        <div className={styles["dices--container"]}>
          <div className={styles["dice--row"]}>{dicesElement.slice(0, 5)}</div>
          <div className={styles["dice--row"]}>{dicesElement.slice(5, 10)}</div>
        </div>
        <button
          className={styles[hasWon ? "reset--btn" : "reRoll--btn"]}
          onClick={hasWon ? resetGame : reRollDices}
        >
          {hasWon ? "Reset" : "Roll"}
        </button>
      </div>
    </main>
  );
}
