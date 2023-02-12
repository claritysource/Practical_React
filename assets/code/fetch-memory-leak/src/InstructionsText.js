import React from 'react'

const InstructionsText = () => {
  return (
    <ul className="fadein">
      <li className='heading'>
        Fix a Memory Leak
      </li>

      <ul>
        <li className="circle-li">Open the Developer Tools</li>
        <li className="circle-li">Type something in the input and wait five seconds</li>
        <li className="circle-li">Notice the React error in the console about the memory leak</li>
        <li className="circle-li">Fix the memory leak</li>
      </ul>
    </ul>
  )
}

export default InstructionsText