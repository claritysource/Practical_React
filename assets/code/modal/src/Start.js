import React from 'react';

const Start = () => {
  const buttonStyle = {
    fontSize: '1.5em',
    backgroundColor: 'sky-blue',
    color: 'blue',
    cursor: 'pointer',
  };

  return (
    <>
      <button 
        className='btn btn-primary'>
        Show Modal
      </button>
    </>
  );
}

export default Start;