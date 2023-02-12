import React from 'react'

const InstructionsText = React.memo(() => {
  const instructions = [
      "Add a second counter that has the counter value outside the button",
      "The button's text should be 'increase'",
      "Add a second 'decrease' button that affects the second count only",
      "Make the background color of the 'increase' button red",
      "Make the background color of the 'decrease' button purple",
      "The first counter should remain the same throughout the entire process",
  ]

  return (
    <ul className="instructions-line fadein">
      {
        instructions.map(line =>
          <li className="circle-li">{line}</li>
        )
      }
    </ul>
  )
})

export default InstructionsText