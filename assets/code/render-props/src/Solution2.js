import React, {useState, useEffect} from 'react';
import './App.css';

const MouseTracker = ({children}) => {
  const [mouseLocation, setMouseLocation] = useState({x: 0, y: 0});
  
  useEffect(() => {
    const listener =
      window.addEventListener('mousemove',
        e => setMouseLocation({x: e.clientX, y: e.clientY}))

    return () => window.removeEventListener('mousemove', listener);
  }, [])

  return children(mouseLocation.x, mouseLocation.y)
}

const Solution = () => {
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
        showMouseCoordinatesInListItems}>
      </MouseTracker>

      <MouseTracker>
        showMouseCoordinatesInAnH3Element}>
      </MouseTracker>
    </>
  );
}

export default Solution;
