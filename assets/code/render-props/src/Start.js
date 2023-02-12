import React from 'react';
import './App.css';
import './Start.css';

const MouseTracker = () => {
  // IMPLEMENT
  return null;
}

const Start = () => {
  const showMouseCoordinatesInListItems = (x, y) =>
    <ul>
      <li>{`${x}`}</li>
      <li>{`${y}`}</li>
    </ul>

  const showMouseCoordinatesInAnH3Element = (x, y) =>
    <h3>
      {`(${x}, ${y})`}
    </h3>

  return (
    <>
      <MouseTracker>
        render={showMouseCoordinatesInListItems}
      </MouseTracker>

      <MouseTracker>
        render={showMouseCoordinatesInAnH3Element}
      </MouseTracker>
    </>
  );
}

export default Start;