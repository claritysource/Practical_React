import React from 'react'

const InstructionsText = () => {
  const instructions = [
      "Show the contents of the textfield as the user types",
  ]

  return (
    <ul className="instructions-line fadein">
      {instructions.map(line =>
          <li className='circle-li'>{line}</li>
        )}
    </ul>
  )
}

export default InstructionsText
