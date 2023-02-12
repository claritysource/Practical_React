import React, {useRef, useState} from 'react';
import './App.css';

const useFetch = url => {
  // Replace the following line of code with the custom hook implementation
  return [false, [], '']
} 

const App = () => {
  const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
  const inputRef = useRef()
  const [query, setQuery] = useState('')
  const [url, setUrl] = useState('')
  const [loading, items, error] = useFetch(url)
  
  const submitForm = e => {
    e.preventDefault()
    setUrl(prevUrl => query ? `${URL}/${query}` : '')
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor='query-input'>Search For </label>
        <input
          ref={inputRef}
          type='text'
          onChange={e => setQuery(e.target.value)} id='query-input' />
      </form>

      <div style={{marginTop: '20px'}}>
        Show the list of books here
      </div>
    </div>
  )
}

export default App;