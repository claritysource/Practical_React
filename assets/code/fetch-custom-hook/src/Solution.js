import React, {useRef, useState, useEffect} from 'react';
import './App.css';

const useFetch = (url) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [items, setItems] = useState([])

  // Called after every render when url changes
  useEffect(() => {
    let mounted = true // Must be mounted if useEffect() is called

    const fetchItems = async () => {
      const response = await fetch(url)
      const data = await response.json()

      // Only update state if mounted
      if (mounted) {
        if (!data.error) {
          setItems(data.items)
        }
        else {
          setError(data.error)
        }

        setLoading(false)
      }
    }

    if (url) {
      // Could unmount between the first line of useEffect() and here,
      // but highly unlikely
      if (mounted) {
        setLoading(true)
        fetchItems()
      }
    }

    // The return function is called before the next time the
    // effect is invoked
    return () => mounted = false
  }, [url])

  return [loading, items, error]
}

const Solution = React.memo(() => {
  const URL = 'https://www.googleapis.com/books/v1/volumes?q='
  const inputRef = useRef();
  const [query, setQuery] = useState('')
  const [url, setUrl] = useState('')
  const [loading, items, error] = useFetch(url)
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const submitForm = e => {
    e.preventDefault()
    setUrl(prevUrl => query ? `${URL}/${query}` : '')
  }

  return (
    <div>
      <form onSubmit={e => submitForm(e)}>
        <label htmlFor='query-input'>Search For </label>
        <input
          ref={inputRef}
          type='text'
          onChange={e => setQuery(e.target.value)} id='query-input' />
      </form>

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