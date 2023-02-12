import React, { useEffect, useState } from 'react';
import './App.css';

// Sleep for the specified delay in milliseconds
const sleep = async delay => new Promise(resolve => setTimeout(resolve, delay))

const getDateFromServer = async () => {
  await sleep(1000)

  if (Math.random() > 0.5) {
    return {
      date: (new Date()).toString()
    }
  }
  else {
    return {
      error: 'Server error'
    }
  }
}

const Start = () => {
  const [date, setDate] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      const serverResponse = await getDateFromServer()

      if (serverResponse.date) {
        setDate(serverResponse.date)
      } else {
        setError(serverResponse.error)
      }
      setLoading(false)
    }

    fetch()
  }, [])

  return (
    <div>
      { loading ? 'Loading...' : date || error }
    </div>
  )
}

export default Start;