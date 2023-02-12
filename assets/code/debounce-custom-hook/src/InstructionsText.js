import React from 'react'

const InstructionsText = () => {
  return (
    <ul className="fadein">
      <li className='heading'>
        Debounce input with a custom hook
      </li>

      <ul>
        <li className="circle-li">Implement a debounce custom hook</li>
        <li className="circle-li">Use the debounce custom hook in conjunction with the fetch hook to fetch JSON from a URl</li>
        <li className="circle-li">Use a debounce delay of one second</li>
      </ul>
    </ul>
  )
}

export default InstructionsText