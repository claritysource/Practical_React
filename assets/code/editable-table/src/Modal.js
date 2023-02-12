import React from 'react'
import './Modal.css'

const Modal = React.forwardRef((props, backdropRef) => {
  return (
    <div className='modal-wrapper'>
      <div
        ref={backdropRef}
        className='modal-backdrop'
      />

      <div className='modal-box'>
        {props.children}
      </div>
    </div>
  )
})

export default Modal