import { useState } from 'react';
import { nanoid } from 'nanoid'
import './App.css';
import Die from './components/Die'

function App() {
  const [dice, setDice] = useState(allNewDice)

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
    setDice(allNewDice)      
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
      <div className="wrapper">
        {generateDie}
      </div>
      <button className='roll-btn' onClick={rollDice}>Roll Dice</button>
    </main>
  );
}

export default App;
