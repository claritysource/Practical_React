import React from 'react'

const InstructionsText = () => {
  return (
    <ul className="fadein">
      <li className='heading'>
        Using only function components, implement a help modal that shows contextual help
      </li>

      <ul>
        <li className="circle-li">Implement two components: <code>HelpButton</code> and <code>HelpModal</code></li>
        <li className="circle-li">The help button appears in the upper right corner of the instructions card</li>
        <li className="circle-li">Clicking the help button shows the help modal</li>
        <li className="circle-li">Pass a string (a key) from the help button to the help modal. The key is the name of the help HTML file.</li>
        <li className="circle-li">Load the HTML file from the the <code>Public/Help</code> directory and show it in the help modal</li>
        <li className="circle-li">Add an Okay button to the help modal that hides the modal when clicked</li>
      </ul>
    </ul>
  )
}

export default InstructionsText