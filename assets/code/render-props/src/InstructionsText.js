import React from 'react'

const InstructionsText = () => {
  return (
    <ul className="fadein">
      <li className='heading'>
        Implement the MouseTracker component as a function component
      </li>

      <ul>
        <li className="circle-li">The MouseTracker component tracks mouse coordinates relative to the window</li>
        <li className="circle-li">The output of the application should look like this</li>
      </ul>
      <div style={{height: '200px'}}>
          <ul style={{marginTop: '20px'}}>
            <li>Mouse X</li>
            <li>Mouse Y</li>
          </ul>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <h3>(MouseX, MouseY)</h3>
          </div>
        </div>
      <li className="circle-li">Implement a custom hook that tracks mouse position</li>
      <li className="circle-li">Refactor the <code>MouseTracker</code> component to use the custom hook</li>
    </ul>
  )
}

export default InstructionsText