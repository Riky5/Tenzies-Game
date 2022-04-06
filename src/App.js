import './App.css';
import Die from './components/Die'

function App() {
  return (
    <main className="main">
      <div className="wrapper">
        <Die
        value={1}
        />
        <Die
        value={6}
        />
        <Die
        value={3}
        />
        <Die
        value={4}
        />
        <Die
        value={1}
        />
        <Die
        value={4}
        />
        <Die
        value={3}
        />
        <Die
        value={2}
        />
        <Die
        value={1}
        />
        <Die
        value={3}
        />
      </div>
    </main>
  );
}

export default App;
