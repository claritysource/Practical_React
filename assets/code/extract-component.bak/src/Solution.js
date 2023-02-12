import React, {useState} from 'react'
import './App.css'
import './Dropdown'

const Solution = () => {
  const [selectedUser, setSelectedUser] = useState(1)

  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bill' },
    { id: 3, name: 'Courtney' },
    { id: 4, name: 'Daniel' },
    { id: 5, name: 'Edward' },
    { id: 6, name: 'Francis' },
  ]

  const getUsername = () => users[selectedUser-1].name

  return (
    <div>
      <div className='selected-user'>Selected User: {getUsername()}</div>
    
      <Dropdown
        label='Users'
        items={users}
        value={selectedUser}
        valueProperty='id'
        displayProperty='name'
        handleOnChange={e => setSelectedUser(e.target.value)}
        width='10em'
      />
    </div>
  )
}

export default Solution;