import React from 'react'
import './Pagination.css'

const PageLinks = ({
  pageNumber,
  numPages,
updatePage}) => {
  const numLinks = getNumLinks()
  const possibleStart = Math.floor(pageNumber - numLinks/2)
  const start = possibleStart > 0 ? possibleStart > numPages + 1 - numLinks ?
                numPages - numLinks + 1 : possibleStart : 1

  return createLinks(start)

  // Functions..................................................................

  function getNumLinks() {
    let result;

    if (numPages < 3) {
      return 0
    }
    else {
      for (let i=1; i <= 10; ++i) {
        if (i < numPages) {
          result = i
        }
      }

      return result
    }
  }

  function createLinks(start) {
    const links = []

    for (let i=0; i < numLinks; ++i) {
      start + i <= numPages &&
      links.push(<div
        key={start + i}
        onClick={() => updatePage(start + i)}
        className={start + i === pageNumber ?
                    "page-links" :
                    "page-links btn-link pointer"}
      >
        {start + i}
      </div>)
    }

    return links
  }
}

export default PageLinks