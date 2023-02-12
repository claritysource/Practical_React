import React, {useState} from 'react'
import './App.css'

const Start = () => {
  const [selectedUser, setSelectedUser] = useState(1)

  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bill' },
    { id: 3, name: 'Courtney' },
    { id: 4, name: 'Daniel' },
    { id: 5, name: 'Edward' },
    { id: 6, name: 'Francis' },
  ]

  return (
    <div>
      <div className='selected-user'>Selected User: {selectedUser}</div>
      <label className='dropdown-label'>Users</label>

      <select
        className="custom-select"
        style={{width: '10em'}}
        value={selectedUser}
        onChange={e => setSelectedUser(e.target.value)}
      >
        {users.map((user) =>
          <option
            key={user.id}
            value={user.id}
          >
            {user.name}
          </option>
        )}
      </select>
    </div>
  )
}

export default Start;
