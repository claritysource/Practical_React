import React from 'react'
import './Pagination.css'

const NextLink = ({
  pageNumber,
  numPages,
  updatePage
}) => {
  return (
    <div
      className='next btn-link pointer'
      onClick={() => updatePage(pageNumber + 1)}>
      { pageNumber < numPages ? 'Next' : '' }
    </div>
  )
}

export default NextLink