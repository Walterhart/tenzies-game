import styles from '../styles/page.module.css';

function Dice(props) {
  return (
    <div  className={styles['dice--box']}>
    <h2 className={styles[`dice--font `]}>{props.value}</h2>
    </div>
  )
}

export default Dice