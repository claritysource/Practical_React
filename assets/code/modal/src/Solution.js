import React, {useEffect, useRef, useState} from 'react'
import Modal from './Modal'

const Solution = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalText, setModalText] = useState('')

  const inputRef = useRef()
  const backdropRef = useRef()

  useEffect(() => {
    if (modalVisible && inputRef.current) {
      inputRef.current.focus()
    }
  }, [modalVisible])

  useEffect(() => {
    const callback = e => {
      if (backdropRef.current && backdropRef.current === e.target) {
        hideModal()
      }
    }

    window.addEventListener('click', callback)

    return () => window.removeEventListener('click', callback)
  }, [])
  
  const showModal = () => {
    setModalVisible(true)
    setModalText('')
  }

  const hideModal = () => {
    setModalVisible(false)
  }

  const handleKeyPress = e => {
    if (e.charCode === 13) {
      hideModal()
    }
  }

  return (
    <div>
      <button
        className='btn btn-primary'
        onClick={showModal}
      >
        Show Modal
      </button>

      {
        modalVisible && 
          <Modal
            title='A Modal'
            ref={backdropRef}
          >
            <div>
              <label htmlFor='input'>Type Something:&nbsp;&nbsp;</label>
              <input
                className='modal-input'
                id='input'
                ref={inputRef}
                onChange={e => setModalText(e.target.value)}
                onKeyPress={e => handleKeyPress(e)}
              />

              <div>
                <button
                  className='btn btn-primary modal-button'
                  onClick={hideModal}>
                  Hide
                </button>
              </div>
            </div>
          </Modal>
      }
      {
       modalVisible ? '' : <div>{modalText}</div>
      }
    </div>
  );
}

export default Solution;