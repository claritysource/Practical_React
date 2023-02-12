import React, { useState } from 'react';
import { UncontrolledTooltip } from 'reactstrap'
import { FaRegQuestionCircle } from 'react-icons/fa'
import './HelpButton.css'
import HelpModal from './HelpModal'

const HelpButton = ({
  htmlKey,
}) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      {modalVisible &&
        <HelpModal
          htmlKey={htmlKey}
          hide={() => setModalVisible(false)}
        />
      }

      <div
        id='help-button'
        className='help-button'
      >
        <span onClick={() => setModalVisible(true)}>
            <FaRegQuestionCircle color='rgb(5, 118, 255)'/>
          </span>
      </div>

      <UncontrolledTooltip
        placement='left'
        target='help-button'
        delay={1500}
        trigger='hover'
      >
        Show Help
      </UncontrolledTooltip>
    </>
  )
}

export default HelpButton