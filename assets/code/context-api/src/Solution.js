import React, {useRef, useState, useEffect} from 'react';
import './App.css';

const useFetch = (url, setDebounced) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(url)
      const data = await response.json()

      if (!data.error) {
        setItems(data.items)
      }
      else {
        setError(data.error)
      }

      setLoading(false)
      setDebounced(false)
    }

    if (url) {
      setLoading(true)
      fetchItems()
    }
  }, [url, setDebounced])

  return [loading, items, error]
}

const useDebounce = (value, debounceDelay) => {
  const [debounced, setDebounced] = useState(false)

  useEffect(() => {
    setDebounced(false)

    if (value) {
      const timeout = setTimeout(() => {
        setDebounced(true)
      }, debounceDelay)

      return () => clearTimeout(timeout)
    }
  }, [value, debounceDelay])

  return [debounced, setDebounced];
}

const Solution = React.memo(() => {
  const URL = 'https://www.googleapis.com/books/v1/volumes?q='
  const inputRef = useRef();

  const [query, setQuery] = useState('')
  const [debounced, setDebounced] = useDebounce(query, 1000)
  const [loading, items, error] = useFetch(debounced ? `${URL}/${query}` : '', setDebounced)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div>
      <label htmlFor='query-input'>Search For </label>
      <input ref={inputRef} type='text' onChange={e => setQuery(e.target.value)} id='query-input' />

      <div style={{marginTop: '20px'}}>
        { loading ? <div>Loading...</div> :
          error   ? <div>{error.message}</div> :
          items   ?
          <div>
            {items.map(i => 
              <div key={i.id}>{i.volumeInfo.title}</div>
            )}
          </div> : null
      }
      </div>
    </div>
  )
})

export default Solution;