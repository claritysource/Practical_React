import React from 'react'
import './App.css'

const InstructionsCard = ({onClick, icon, title, description, buttonText}) => {
    return (
        <div
            style={{paddingTop: '1em', paddingLeft: '2em', paddingRight: '2em'}}
            className="col-sm-3 center-text fadein">
            <div className="card card-icon">
                <div className="card-body-landing-icon">
                    <div className="text-center card-title card-icon-title">
                        <div style={{ height: '61.99px' }}>
                            <div style={{ height: '61.99px' }}>
                                <span className="card-icon-dot"></span>
                            </div>
                            {icon}
                        </div>
                        <h4 className="mt-4 card-icon-title">{title}</h4>
                    </div>
                    <div className="card-text card-icon-text">{description}</div>
                </div>

                <div className="card-footer" onClick={onClick}>
                    <span className="stretched-link btn btn-link btn-block fadein pointer">
                        {buttonText}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default InstructionsCard