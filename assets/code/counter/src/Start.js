import React, { useState } from 'react'

const Button = ({
  style,
  ...props
}) => (
  <button
    style={{
      border: 'none',
      padding: '16px',
      borderRadius: '4px',
      background: 'lightblue',
      margin: '5px',
      ...style,
    }}
    {...props}
  />
)

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <Button
      onClick={() => setCount(prev => prev + 1)}
    >
      {count}
    </Button>
  )
};

const Start = () => {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default Start
