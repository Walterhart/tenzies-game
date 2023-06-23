import styles from '../styles/page.module.css';

function Dice(props) {
    const diceColor = {
        backgroundColor: props.isHold ? "#59E391" : "white"
    }

  return (
    <div  className={styles['dice--box'] } style={diceColor} onClick={props.holdDice} >
    <h2 className={styles[`dice--font `]}>{props.value}</h2>
    </div>
  )
}

export default Dice