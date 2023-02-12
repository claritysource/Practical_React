import React, { useState } from "react"
import "./App.css"

const Button = ({
  style,
  ...props
}) => (
  <button
    style={{
      border: "none",
      padding: "16px",
      borderRadius: "4px",
      background: "lightblue",
      margin: "5px",
      ...style,
    }}
    {...props}
  />
)

const Counter = ({
  twoButtons = false
}) => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)

  return twoButtons ?
    <div>
      <Button
        style={{ backgroundColor: "red" }}
        onClick={increment}
      >
        increase
      </Button>

      <Button
         style={{ backgroundColor: "purple" }}
         onClick={decrement}
       >
        decrease
      </Button>

      {count}
    </div>
  :
    <Button
      onClick={increment}>
        {count}
      </Button>
}

const Solution = () => {
  return (
    <div>
      <Counter />
      <Counter twoButtons={true} />
    </div>
  )
}

export default Solution
