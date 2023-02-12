import React from 'react'
import { FaPlus } from 'react-icons/fa'

const InstructionsIcon = React.memo(() => {
  return (
    <FaPlus
      className="title-dot-icon"
      style={{ display: 'inline' }}
    />
  )
})

export default InstructionsIcon