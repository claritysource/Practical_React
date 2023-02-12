import React, { useState } from 'react'
import PageLinks from './PageLinks'
import NextLink from './NextLink'
import PreviousLink from './PreviousLink'
import './Pagination.css'

const Pagination = ({numPages, updatePage}) => {
  const [pageNumber, setPageNumber] = useState(1)

  const setPage = newPageNumber => {
    setPageNumber(newPageNumber)
    updatePage(newPageNumber)
  }

  return (
    numPages > 1 &&
    <div className='pagination-container'>
      <PreviousLink
        pageNumber={pageNumber}
        updatePage={setPage}
      />

      <PageLinks
        pageNumber={pageNumber}
        numPages={numPages}
        updatePage={setPage}
      />

      <NextLink
        pageNumber={pageNumber}
        numPages={numPages}
        updatePage={setPage}
      />
    </div>
  )
}

export default Pagination