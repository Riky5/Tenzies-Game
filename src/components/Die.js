import './Die.css';

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#33ccff" : "#e6f9ff"
  }
  return (
    <div onClick={props.holdDice} className="die" style={styles}>
      <h1>{props.value}</h1>
    </div>
  )
}