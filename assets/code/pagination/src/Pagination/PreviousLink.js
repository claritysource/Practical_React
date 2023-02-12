import React from 'react'
import './Pagination.css'

const PreviousLink = ({
  pageNumber,
  updatePage
}) => {
  return (
    <div
      className='prev btn-link pointer'
      onClick={() => updatePage(pageNumber - 1)}>
      { pageNumber > 1 ? 'Previous' : '' }
    </div>
  )
}

export default PreviousLink