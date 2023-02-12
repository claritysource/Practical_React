import React from 'react'

const InstructionsText = () => {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'left'}}>
        <ul className="fadein">
          <li className='heading'>
            <div>Number inputs have min and max attributes, but they are only enforced when you submit the surrounding form.</div>
            <p>Implement a <code>NumberInput</code> component that enforces min and max properties as the user types into the input. The <code>NumberInput</code> component must:</p>
          </li>

          <ul>
            <li className="circle-li">Accept <code>min</code> and <code>max</code> props that specify the minimum and maximum values</li>
            <li className="circle-li">Accept a <code>ref</code> that you can use to give focus to the input</li>
            <li className="circle-li">Accept a <code>style</code> prop that the component uses to style the input</li>
            <li className="circle-li">Accept a <code>setValue()</code> prop that sets a value to the value in the input</li>
            <li className="circle-li">Accept a <code>setShowError()</code> prop that shows or hides an error message</li>
          </ul>
        </ul>
      </div>

      <div style={{display: 'flex', justifyContent: 'left'}}>
        <ul className="fadein">
          <li>
            <p>Implement the <code>NumberInput</code> element with a <code>text</code> input instead of a <code>number</code> input, so the input does not show up and down arrows.</p>
          </li>

          <p>Show an error message above the <code>NumberInput</code> when the user types the following</p>
          <ul>
            <li className="circle-li">A number that is less than the minimum or greater than the maximum</li>
            <li className="circle-li">Anything other than a digit</li>
          </ul>
          <p>Make sure the following keys work as expected in the <code>NumberInput</code></p>
          <ul>
            <li className="circle-li">The Backspace key</li>
            <li className="circle-li">The Left and Right arrow keys</li>
            <li className="circle-li">The Delete key</li>
            <li className="circle-li">The Tab key</li>
            <li className="circle-li">The Shift key</li>
            <li className="circle-li">The CapsLock key</li>
          </ul>
        </ul>
      </div>
    </>
  )
}

export default InstructionsText