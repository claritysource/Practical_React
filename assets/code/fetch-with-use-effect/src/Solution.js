import React, {useRef, useState, useEffect} from 'react';
import './App.css';

const Solution = React.memo(() => {
  const URL = 'https://www.googleapis.com/books/v1/volumes?q='
  const inputRef = useRef();
  const [query, setQuery] = useState('')
  const [url, setUrl] = useState('')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    let mounted = true

    const fetchData = async () => {
      const response = await fetch(url)
      const json = await response.json()

      if (mounted && json) {
        if (!json.error) {
          setItems(json.items)
        }
        else {
          setError(json.error.message)
        }

        setLoading(false)
      }
    }

    if (mounted && url) {
      setLoading(true)
      fetchData()
    }

    return () => mounted = false
  }, [url])

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
          onChange={e => setQuery(e.target.value)} id='query-input'
        />
      </form>

      <div style={{marginTop: '20px'}}>
        {loading ? 'Loading...' :
         error ? (<div>{error}</div>) :
         items &&
          items.map(item =>
            <div>{item.volumeInfo.title}</div>
          )
        }
      </div>
    </div>
  )
})

export default Solution;