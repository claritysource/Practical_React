import React from 'react'

const InstructionsText = () => {
  return (
    <ul className="fadein">
      <li className='heading'>
        Implement a custom useFetch() hook and use it to retrieve books
      </li>

      <ul>
        <li className="circle-li">Implement a custom useFetch() hook that can fetch data from any URL</li>
        <li className="circle-li">Use the useRef() hook to give focus to the input field</li>
        <li className="circle-li">Invoke the useFetch() hook when the user types Enter in the text field</li>
        <li className="circle-li">Show the text <i>Loading...</i> while the custom hook is fetching data</li>
        <li className="circle-li">Show the error message returned from the server if the fetch fails</li>
        <li className="circle-li">Make sure the effect does not update state if the component is unmounted</li>
      </ul>

      <div style={{marginTop: '1em'}}>
        Notes:
        <ul>
          <li>Use the JavaScript <code>fetch()</code> function</li>
          <li>The Google Books API returns an array of book items</li>
          <li>Access book titles with the book's <code>volumeInfo.title</code> property</li>
        </ul>
      </div>
    </ul>
  )
}


export default InstructionsText