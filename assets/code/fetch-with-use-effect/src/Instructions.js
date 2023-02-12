import React from 'react';

import InstructionsCard from './InstructionsCard'
import InstructionsText from './InstructionsText'
import InstructionsIcon from './InstructionsIcon'

import './Instructions.css'

const Instructions = ({solutionVisible, toggleSolution}) => {
  return (
    <InstructionsCard
      onClick={toggleSolution}
      title='Use the useEffect() hook to fetch data from a URL'
      icon={<InstructionsIcon />}
      description={<InstructionsText />}
      buttonText={solutionVisible ?
                  'Hide Solution' :
                  'Show Solution'
                 }
    />
  )
}

export default Instructions;