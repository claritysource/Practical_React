import React from 'react'
import './Modal.css'

const Modal = ({children}) => {
  return (
    <div className='modal-wrapper'>
      <div className='modal-backdrop'/>

      <div className='modal-box'>
        {children}
      </div>
    </div>
  )
}

export default Modal