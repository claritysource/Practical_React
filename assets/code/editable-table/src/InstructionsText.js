import React from 'react'

const InstructionsText = () => {
  return (
    <ul className="fadein">

      When you click an edit icon
      <ul>
        <li className="circle-li">Replace the edit icon with the check and cancel icons for that row in the table</li>
        <li className="circle-li">Replace the text for firstName, lastName, and age with inputs</li>
      </ul>

      <p></p>When you click a check icon
      <ul>
        <li className="circle-li">Save the edits for firstName, lastName, and age for the row</li>
        <li className="circle-li">Replace the check and cancel icons for that row with the edit icon</li>
      </ul>

      <p></p>When you click a cancel icon
      <ul>
        <li className="circle-li">Change firstName, lastName, and age for the row back to their original values</li>
        <li className="circle-li">Replace the check and cancel icons for that row with the edit icon</li>
      </ul>
    </ul>
  )
}

export default InstructionsText