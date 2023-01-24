import ScoreBoard from './components/ScoreBoard';
import Selection from './components/Selection';

function App() {
  return (
    <div className="App flex flex-col items-center justify-between">
      <ScoreBoard score={1} />
      <Selection />
    </div>
  );
}

export default App;
