import React, { useEffect } from 'react'
import {useState} from 'react'
import './Spinner.css'

const Spinner = () => {
  return <div className='outerDiv'>
    <div className='busySpinnerContainer'>
      <div className='spinner'/>
    </div>
  </div>
}

const SpinnerWithBackdrop = ({
  children,
  visible,
}) => {
  return (
    <div> 
      {visible && <Spinner/>}
      <p style={{marginTop: 10}}>{children}</p>
    </div>
  )
}

const Start = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (visible) {
      setTimeout(() => setVisible(false), 2000) 
    }
  }, [visible])

  return (
    <SpinnerWithBackdrop visible={visible}>
      <div>
        {!visible &&
          <button onClick={() => {
            setVisible(!visible)
          }}>
            Show Spinner for two seconds
          </button>
        }
      </div>
    </SpinnerWithBackdrop>
  )
}

export default Start;