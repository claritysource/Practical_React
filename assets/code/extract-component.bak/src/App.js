import React, {useState} from 'react';
import Instructions from './Instructions';
import WorkArea from './WorkArea';

const App = () => {
  const [solutionVisible, setSolutionVisible] = useState(false);

  return (
    <div style={{backgroundColor: 'aliceblue'}}>
      <Instructions
        solutionVisible={solutionVisible}
        toggleSolution={() => setSolutionVisible(!solutionVisible)}
      />

      <WorkArea solutionVisible={solutionVisible} />
    </div>
  )
}

export default App;