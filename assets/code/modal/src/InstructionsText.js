import React from 'react'

const InstructionsText = () => {
  return (
    <ul className="fadein">
      <li className='heading'>
        Using only function components, implement a modal that appears after the user clicks the <b>Show Modal</b> button.
      </li>

      <ul>
        <li className="circle-li">The modal is centered and shown on top of a partially opaque background</li>
        <li className="circle-li">The modal contains a text input field and a button</li>
        <li className="circle-li">The input field receives focus after the modal appears</li>
        <li className="circle-li">Clicking the modal's button makes the modal disappear</li>
        <li className="circle-li">Clicking outside the modal makes the modal disappear</li>
        <li className="circle-li">Typing the enter key while the input has focus makes the modal disappear</li>
        <li className="circle-li">When the modal disappears, the text from the modal's input appears below the Show Modal button</li>
      </ul>
    </ul>
  )
}

export default InstructionsText