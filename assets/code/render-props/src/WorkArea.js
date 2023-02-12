import React from 'react'
import Start from './Start';
import Solution from './Solution2';

const WorkArea = ({solutionVisible}) => {
  return (
    <div className='work-area'>
      { solutionVisible ? <Solution /> : <Start /> }
    </div>
  )
}

export default WorkArea