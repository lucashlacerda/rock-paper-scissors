import Rules from './components/Rules';
import RulesButton from './components/RulesButton';
import ScoreBoard from './components/ScoreBoard';
import Selection from './components/Selection';

function App() {
  return (
    <div className="App flex flex-col items-center justify-between">
      <ScoreBoard score={1} />
      <Selection />
      <RulesButton />
      {/* <Rules /> */}
    </div>
  );
}

export default App;
