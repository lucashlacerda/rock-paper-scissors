import { useState } from 'react';
import Rules from './components/Rules';
import RulesButton from './components/RulesButton';
import ScoreBoard from './components/ScoreBoard';
import Selection from './components/Selection';

function App() {
  const [showRules, setShowRules] = useState(false);

  function handleShowingRules(): void {
    setShowRules(!showRules);
  }

  return (
    <div className="App flex flex-col items-center">
      <ScoreBoard score={1} />
      <Selection />
      <RulesButton showing={showRules} handleClick={handleShowingRules} />
      <Rules closeRules={() => setShowRules(false)} showing={showRules} />
    </div>
  );
}

export default App;
