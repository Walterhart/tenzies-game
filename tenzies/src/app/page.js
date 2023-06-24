"use client";
import Dice from "@/components/Dice";
import styles from "../styles/page.module.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function Home() {
  const [dices, setDices] = useState([]);
  const min = 0;
  const max = 10;

  const getRandomDiceArray = () => {
    const randomDiceArray = Array(10)
      .fill(1)
      .map((num) => {
        return generateRandomDices();
      });

    return randomDiceArray;
  };

  const generateRandomDices = () => {
    return {
      value: Math.floor(Math.random() * (max - min + 1)) + min,
      isHold: false,
      id: nanoid(),
    };
  };

  useEffect(() => {
    setDices(getRandomDiceArray());
  }, []);

  const reRollDices = () => {
    setDices((prevDices) =>
      prevDices.map((dice) => {
        return dice.isHold ? dice : generateRandomDices();
      })
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

  const holdDice = (id) => {
    setDices((prevDice) =>
      prevDice.map((dice) =>
        dice.id === id ? { ...dice, isHold: !dice.isHold } : dice
      )
    );
  };

  return (
    <main className={styles.main}>
      <div className={styles["main--content"]}>
        <div className={styles["dices--container"]}>
          <div className={styles["dice--row"]}>{dicesElement.slice(0, 5)}</div>
          <div className={styles["dice--row"]}>{dicesElement.slice(5, 10)}</div>
        </div>
        <button className={styles["reRoll--btn"]} onClick={reRollDices}>
          {" "}
          Roll
        </button>
      </div>
    </main>
  );
}
