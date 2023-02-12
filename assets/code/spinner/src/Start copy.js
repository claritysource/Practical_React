import React from 'react';

const SpinnerWithBackdrop = ({
  children,
}) => {
  return (
    <div>
      {children}
    </div>
  )
}

const Start = () => {
  return (
    <SpinnerWithBackdrop>
      <div>
        <button>
          Show Spinner for two seconds
        </button>
      </div>
    </SpinnerWithBackdrop>
  )
}

export default Start;