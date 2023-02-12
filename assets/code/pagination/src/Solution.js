import React, {useState, useEffect} from 'react';
import Spinner from './Spinner/Spinner'
import './App.css';
import Pagination from './Pagination/Pagination';

const Solution = React.memo(() => {
  const [numPages] = useState(100)
  const [pageNumber, setPageNumber] = useState(1)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const URL = `https://randomuser.me/api/?page=${pageNumber}&results=10`

      try {
        const response = await fetch(`${URL}`, {
          method: "GET",
        });
        const json = await response.json();
        return setUsers(json.results);
      } catch (ex) {
        return null;
      }
    }

    fetchUsers()
  }, [pageNumber])

  const updatePage = pageNum => {
    setUsers([])
    setPageNumber(pageNum)
  }

  return (
    <div>
      <Pagination
        numPages={numPages}
        updatePage={pageNum => updatePage(pageNum)}
      />

      {users.length === 0 ? <div style={{marginTop: '40px'}}><Spinner /></div> : 
        <div style={{marginTop: '20px'}}>
          <div>
            {users.map(i => 
              <div key={i.cell}>
                {i.name.first} {i.name.last}
              </div>
            )}
          </div>
        </div>
      }
    </div>
  )
})

export default Solution;