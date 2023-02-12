import React from 'react';
import { FaRegTimesCircle } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

import './CloseBox.css'

const CloseBox = React.memo(() => {
  const ICON_COLOR = 'blue'
  const history = useHistory()

  const handleClick = () => {
    history.goBack()
  }

  return (
    <div
      id='close-box'
      className='close-box'>
      <span onClick={() => handleClick()}>
          <FaRegTimesCircle color={ICON_COLOR} />
        </span>
    </div>
  )
})

export default CloseBox