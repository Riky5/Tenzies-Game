import { useState } from 'react';
import './App.css';
import Die from './components/Die'

function App() {
  const [dice, setDice] = useState(allNewDice)

  function allNewDice() {
    const newDice = []
      for (let i = 0; i < 10; i++) {
        newDice.push({value: Math.ceil(Math.random() * 6), isHeld: false})
      }
    return newDice
  }

  function rollDice() {
    setDice(allNewDice)      
  }

  const generateDie = dice.map((die,i)=> <Die key={i} value={die.value} />)

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
