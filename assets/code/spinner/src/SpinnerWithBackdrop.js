import React from 'react'
import Spinner from './Spinner'

const SpinnerWithBackdrop = ({
  condition,
  bgColor='rgba(0,0,0,0.4)',
  children,
}) => 
  <div>
  {condition &&
    <div className='busy-spinner-container'
         style={condition ? {backgroundColor: bgColor} : {}}>
      <Spinner />
    </div>
  }
    {children}
  </div>

export default SpinnerWithBackdrop