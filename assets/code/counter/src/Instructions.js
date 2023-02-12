import React from 'react'
import InstructionsIcon from './InstructionsIcon'
import InstructionsText from './InstructionsText'

const Instructions = React.memo(({
  onClick,
  title,
  buttonText}) => {
    return (
        <div className="instructions-container center-text fadein">
          <div className="instructions-card card card-icon"
               style={{borderRadius: '20px 20px 20px 20px'}}
          >
            <div className="card-body-icon">
              <div className="text-center card-title card-icon-title">
                  <div style={{ marginBottom: '1em', height: '61.99px' }}>
                      <div style={{ height: '61.99px' }}>
                        <span className="card-icon-dot"></span>
                      </div>
                      <InstructionsIcon />
                  </div>
                  <h4 className="card-icon-title">{title}</h4>
              </div>
              <div style={{
                  display: 'flex',
                  justifyContent: 'center'
                  }}
                  className="card-text card-icon-text">
                  <InstructionsText />
              </div>
            </div>

            <div className="card-footer" onClick={onClick} style={{borderRadius: '0 0 20px 20px'}}>
                <span className="stretched-link btn btn-link btn-block fadein pointer">
                    {buttonText}
                </span>
            </div>
          </div>
        </div>
    )
})

export default Instructions