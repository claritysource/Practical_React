import React, {useEffect, useRef, useState} from 'react';
import './Modal.css'

const Modal = ({children, hideModal}) => {
  const backdropRef = useRef()

  useEffect(() => {
    const listener = window.addEventListener('click', (e) => {
      if (e.target === backdropRef.current) {
        hideModal()
      }
    })

    return () => window.removeEventListener('click', listener)
  }, [])

  return (
    <div className='modal-wrapper'>
      <div
        ref={backdropRef}
        className='modal-backdrop'
      />
      <div className='modal-box'>{children}</div>
    </div>
  )
}

const Solution = () => {
  const inputRef = useRef()
  const [modalVisible, setModalVisible] = useState(false)
  const [modalText, setModalText] = useState('')

  const buttonStyle = {
    fontSize: '1.5em',
    backgroundColor: 'sky-blue',
    color: 'blue',
    cursor: 'pointer',
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [modalVisible])

  const keyPress = e => {
    if (e.charCode === 13) {
      setModalVisible(false)
    }
  }
  return (
    <>
      <button
        onClick={() => setModalVisible(true)}
        style={buttonStyle} >
        Show Modal
      </button>

      {modalVisible ?
        (<Modal
          hideModal={() => setModalVisible(false)}
         >
          <label htmlFor='input'>
            Enter text
          </label>

          <input
            ref={inputRef}
            onChange={e => setModalText(e.target.value)}
            onKeyPress={keyPress}
            id='input'
            type='text'
          />

          <div>
            <button
              onClick={() => setModalVisible(false)}>
              Hide Modal
            </button>
          </div>
        </Modal>
        )
        :
        modalText &&
        <div>{modalText}</div>
      }
    </>
  );
}

export default Solution;