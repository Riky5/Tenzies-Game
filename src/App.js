import { useState } from 'react';
import './App.css';
import Die from './components/Die'

function App() {
  function allNewDice() {
    const newDice = []
      for (let i = 0; i < 10; i++) {
        newDice.push(Math.ceil(Math.random() * 6))
      }
      return newDice
  }

  const [dice, setDice] = useState(allNewDice)

  const generateDie = dice.map((num,i)=>{
    return (
      <Die key={i} value={num} />
    )
  })

  return (
    <main className="main">
      <div className="wrapper">
        {generateDie}
      </div>
    </main>
  );
}

export default App;
