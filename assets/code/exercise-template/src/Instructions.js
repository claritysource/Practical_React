import React from 'react'
import InstructionsIcon from './InstructionsIcon'
import InstructionsText from './InstructionsText'

const Instructions = ({
  title,
  buttonText}) =>
    <div className="instructions-container center-text fadein">
      <div className="card instructions-card card-icon">
        <div className="card-body-icon">
          <div className="text-center card-title card-icon-title">
              <div>
                <span className="card-icon-dot"></span>
              </div>

              <InstructionsIcon />

              <h4 className="card-icon-title">
                {title}
              </h4>
          </div>
          <div className="card-text card-icon-text">
              <InstructionsText />
          </div>
        </div>

        <div className="card-footer">
          <span className="stretched-link btn btn-link btn-block fadein pointer">
              {buttonText}
          </span>
        </div>
      </div>
    </div>

export default Instructions
