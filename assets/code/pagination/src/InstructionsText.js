import React from 'react'

const InstructionsText = () => {
  return (
    <ul className="fadein">
      <li className='heading'>
        Implement a pagination component and use it to paginate user requests
      </li>

      <ul>
        <li className="circle-li">Show the Spinner component while fetching users</li>
        <li className="circle-li">Implement Next and Previous buttons that show the next and previous pages</li>
        <li className="circle-li">Add page numbers between the buttons that take you directly to a page</li>
        <li className="circle-li">The current page number should be black and not a link. The others should be blue links.</li>
        <li className="circle-li">Clicking on the buttons and numbers should work like the solution.</li>
      </ul>
    </ul>
  )
}

export default InstructionsText