import React from 'react'
import Start from './Start';
import Solution from './Solution';

const WorkArea = ({solutionVisible, setSolutionVisible}) => {
  return (
    <div className='work-area'>
      { solutionVisible ?
        <Solution setSolutionVisible={setSolutionVisible}/> :
        <Start setSolutionVisible={setSolutionVisible} /> 
      }
    </div>
  )
}

export default WorkArea