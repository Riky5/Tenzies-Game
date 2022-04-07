import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import './App.css';
import Die from './components/Die'
import Confetti from 'react-confetti'

function App() {
  const [dice, setDice] = useState(allNewDice)
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const result = dice.every(die => die.isHeld && die.value === dice[0].value)
      if (result) {
        setTenzies(true)
      }
  }, [dice])

  function allNewDice() {
    const newDice = []
      for (let i = 0; i < 10; i++) {
        newDice.push({
          value: Math.ceil(Math.random() * 6), 
          isHeld: false,
          id: nanoid()
        })
      }
    return newDice
  }

  function rollDice() {
    if (tenzies) {
      setTenzies(false)
      setDice(allNewDice())
    }
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld === true ? die : {...die, id: nanoid(), value: Math.ceil(Math.random() * 6)}
    }))
  }

  function holdDice(id) {
    const newDice = dice.map(die=>{
      if (die.id === id) {
        die.isHeld = !die.isHeld
      }
      return die
    })
    setDice(newDice)
  }

  const generateDie = dice.map((die)=> {
    return (
      <Die 
      key={die.id} 
      value={die.value}
      isHeld={die.isHeld}
      holdDice={()=>holdDice(die.id)} 
      />
    )
  })

  return (
    <main className="main">
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same.<br /> Click each die to freeze it at its current value between rolls.</p>
      <div className="wrapper">
        {generateDie}
      </div>
      <button className='roll-btn' onClick={rollDice}>{tenzies ? "New Game" : "Roll Dice"}</button>
    </main>
  );
}

export default App;
