import React from 'react'

const InstructionsText = () => {
  return (
    <ul className="fadein">
      <li className='heading'>
        Implement a spinner with a backdrop
      </li>

      <ul>
        <li className="circle-li">Implement a <code>Spinner</code> component</li>
        <li className="circle-li">The <code>Spinner</code> should show an animated loading indicator</li>
        <li className="circle-li">Implement a <code>SpinnerWithBackdrop</code> component</li>
        <li className="circle-li">The <code>SpinnerWithBackdrop</code> shows the <code>Spinner</code> in a DIV with a partially opaque backround</li>
        <li className="circle-li">Show the <code>SpinnerWithBackdrop</code> when the user clicks the button</li>
      </ul>
    </ul>
  )
}

export default InstructionsText