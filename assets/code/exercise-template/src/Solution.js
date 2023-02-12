import React, { useState } from "react"
import "./App.css"

const Solution = () => {
  const [text, setText] = useState('')

  return (
    <>
      <div>
        <input type='text' onChange={e => setText(e.target.value)}/>
      </div>

      <div style={{marginTop: '2em'}}>
        {text}
      </div>
    </>
  )
}

export default Solution
