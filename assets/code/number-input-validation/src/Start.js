import React from 'react'
import './Start.css'

const NumberInput = () => {
  return (
    <div>
      Implement a Number Input component here
    </div>
  )
}

const Start = () => {
  return (
    <>
      <div className='prompt'>
        Enter a number between 1 and 99
      </div>

      <NumberInput />
    </>
  )
}

export default Start