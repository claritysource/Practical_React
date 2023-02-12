import React from 'react';
import './Spinner.css';

const Spinner = ({size}) => {
  return (
    <div className='outerDiv fadein-quickly'>
      <div
        style={size &&
        {
          width: size,
          height: size,
          borderWidth: size/10,
        }}
        className='spinner'>
      </div>
    </div>
  );
}

export default Spinner;