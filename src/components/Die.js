import './Die.css';

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "rgb(197, 241, 247)" : "rgb(213, 234, 243)"
  }
  return (
    <div onClick={props.holdDice} className="die" style={styles}>
      <h1>{props.value}</h1>
    </div>
  )
}