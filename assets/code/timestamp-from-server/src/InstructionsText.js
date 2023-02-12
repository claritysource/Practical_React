import React from 'react'

const InstructionsText = () => {
  return (
    <ul className="fadein">
      <ul>
        <li className="circle-li">Implement the <code>sleep()</code> function called from <code>getTimeFromServer()</code></li>
        <li className="circle-li">Modify the <code>Start</code> component so that it fetches the date from the server when the solution loads</li>
        <li className="circle-li">While the component is fetching the date, show the text 'Loading...'</li>
        <li className="circle-li">When the component is done fetching, show the return value, either the date or an error</li>
      </ul>
    </ul>
  )
}

export default InstructionsText