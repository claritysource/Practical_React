import React, {useState} from 'react';
import Instructions from './Instructions';
import WorkArea from './WorkArea';
import './App.css';

const App = () => {
  const [solutionVisible, setSolutionVisible] = useState(false);

  return (
    <>
      <Instructions
        solutionVisible={solutionVisible}
        toggleSolution={() => setSolutionVisible(!solutionVisible)}
      />

      <WorkArea
        solutionVisible={solutionVisible}
        setSolutionVisible={setSolutionVisible}
      />
    </>
  )
}

export default App;