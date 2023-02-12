import React from 'react';
import './App.css';

// Sleep for the specified delay in milliseconds
const sleep = async delay => {}

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
  return (
    <div>
      Show date or server error here
    </div>
  )
}

export default Start;