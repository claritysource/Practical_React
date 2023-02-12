import React from 'react';
import './App.css';

const App = () => {
  const URL = 'https://www.googleapis.com/books/v1/volumes?q=';

  return (
    <div>
      <form>
        <label htmlFor='query-input'>Search For </label>
        <input
          id='query-input'
          type='text'
        />
      </form>

      <div style={{marginTop: '20px'}}>
        Show the list of books here
      </div>
    </div>
  )
}

export default App;