import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom'
import Instructions from './Instructions';
import WorkArea from './WorkArea';
import './App.css';

const App = () => {
  const [solutionVisible, setSolutionVisible] = useState(false);

  return (
    <BrowserRouter>
      <Instructions
        solutionVisible={solutionVisible}
        toggleSolution={() => setSolutionVisible(!solutionVisible)}
      />

      <WorkArea solutionVisible={solutionVisible} />
    </BrowserRouter>
  )
}

export default App;