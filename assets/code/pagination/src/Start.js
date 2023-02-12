import React, {useState, useEffect} from 'react';
import './App.css';

const Solution = React.memo(() => {
  const [pageNumber] = useState(1)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const URL = `https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?page=${pageNumber}&results=10`

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

  return (
    <div style={{marginTop: '40px'}}>
      <div>
        {users && users.map(i => 
          <div key={i.cell}>
            {i.name.first} {i.name.last}
          </div>
        )}
      </div>
    </div>
  )
})

export default Solution;