import React from 'react'

const InstructionsText = () => {
  return (
    <ul className="fadein">
      <li className='heading'>
        Fetch books from the Google Books API
      </li>

      <ul>
        <li className="circle-li">Use the <code>useEffect()</code>hook to fetch books from Google Books</li>
        <li className="circle-li">Use the <code>useRef()</code> hook to give focus to the input field</li>
        <li className="circle-li">Invoke the <code>useFetch()</code> hook when the user types Enter in the text field</li>
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