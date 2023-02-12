import React from 'react'
import { FaPlug } from 'react-icons/fa'

const InstructionsIcon = React.memo(() => {
  return (
    <FaPlug
      className="title-dot-icon"
      style={{ display: 'inline' }}
    />
  )
})

export default InstructionsIcon