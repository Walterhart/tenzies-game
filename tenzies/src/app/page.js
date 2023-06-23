"use client"
import Dice from '@/components/Dice';
import styles from '../styles/page.module.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [dices, setDices] = useState([]);
  const min = 0;
  const max = 10;

  const getRandomDiceArray = () => {
    const randomDiceArray = Array(10).fill(1).map(() => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    });

    return randomDiceArray;
  };

  useEffect(() => {
    setDices(getRandomDiceArray());
  }, []);

  const dicesElement = dices.map((num, index) => (
    <div key={index} className={styles['dice--box']}>
      <Dice value={num} />
    </div>
  ));

  const reRollDices = () =>{
    setDices(getRandomDiceArray)
  }

  return (
    <main className={styles.main}>
      <div className={styles['main--content']}>
        <div className={styles['dices--container']}>
          <div className={styles['dice--row']}>
            {dicesElement.slice(0, 5)}
          </div>
          <div className={styles['dice--row']}>
            {dicesElement.slice(5, 10)} 
          </div>
        </div>
        <button className={styles['reRoll--btn']} onClick={reRollDices}> Roll</button>
      </div>
    </main>
  );
}
