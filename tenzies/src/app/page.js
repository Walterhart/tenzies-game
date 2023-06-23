import Dice from '@/components/Dice';
import styles from '../styles/page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles['main--content']}>
        <div className={styles['dices--container']}>
          <div className={styles['dice--row']}>
            <Dice value={1} />
            <span className={styles['dice--number-space']} />
            <Dice value={1} />
            <span className={styles['dice--number-space']} />
            <Dice value={1} />
            <span className={styles['dice--number-space']} />
            <Dice value={1} />
            <span className={styles['dice--number-space']} />
            <Dice value={1} />
          </div>
          <div className={styles['dice--row']}>
            <Dice value={1} />
            <span className={styles['dice--number-space']} />
            <Dice value={1} />
            <span className={styles['dice--number-space']} />
            <Dice value={1} />
            <span className={styles['dice--number-space']} />
            <Dice value={1} />
            <span className={styles['dice--number-space']} />
            <Dice value={1} />
          </div>
        </div>
      </div>
    </main>
  );
}
