import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa'

const Start = () => {
  const [tableData, setTableData] = useState([
    { firstName: 'Daniel', lastName: 'Woodward', age: 25 },
    { firstName: 'Daniel', lastName: 'Woodward', age: 25 },
    { firstName: 'Daniel', lastName: 'Woodward', age: 25 },
    { firstName: 'Daniel', lastName: 'Woodward', age: 25 },
    { firstName: 'Daniel', lastName: 'Woodward', age: 25 },
    { firstName: 'Daniel', lastName: 'Woodward', age: 25 },
    { firstName: 'Daniel', lastName: 'Woodward', age: 25 },
    { firstName: 'Daniel', lastName: 'Woodward', age: 25 },
  ])

  return (
    <>
      <EditableTable
        tableData={tableData}
        setTableData={setTableData}
      />

      <table>
        Data:
        {
          tableData.map(row =>
            <tr>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.age}</td>
            </tr>
          )
        }
      </table>
    </>
  )
}

const EditableTable = ({
  tableData,
  setTableData,
}) => {
  return (
    <div className='table-container'>
      <table className='table'>
        <thead>
          <tr>
            <th className='first-name-header'>First Name</th>
            <th className='last-name-header'>Last Name</th>
            <th className='age-header'>Age</th>
            <th className='actions-header'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {
            tableData.map(data =>
              <tr>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.age}</td>
                <td><FaRegEdit /></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Start;