import React from 'react'
import Start from './Start';
import Solution from './CloseBox';

const WorkArea = ({solutionVisible}) => {
  return (
    <div className='work-area'>
      { solutionVisible ? <Solution /> : <Start /> }
    </div>
  )
}

export default WorkArea