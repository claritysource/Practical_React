import React, { useState } from 'react';
import { FaRegEdit, FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa'

const Solution = () => {
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
  const [tableDataCopy, setTableDataCopy] = useState([...tableData])
  const [rowsBeingEdited, setRowsBeingEdited] = useState([])

  const edit = index => {
    if (!rowsBeingEdited.includes(index)) {
      setRowsBeingEdited([
        ...rowsBeingEdited,
        index,
      ])
    }
  }

  const setProperty = (index, property, value) => {
    const newTableData = [...tableDataCopy]

    newTableData[index] = {
      ...newTableData[index],
      [property]: value,
    }

    setTableDataCopy(newTableData)
  }

  const stopEditing = index => {
    setRowsBeingEdited(rowsBeingEdited.filter(row => row !== index))
  }

  const cancelEdit = index => {
    stopEditing(index)
    tableDataCopy[index] = tableData[index]
  }

  const saveEdits = index => {
    stopEditing(index)
    setTableData(tableDataCopy)
  }

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
            tableDataCopy.map((data, i) =>
              <tr
                key={i}>
                {rowsBeingEdited.includes(i) ?
                  <>
                    <td>
                      <input
                        className='first-name-input'
                        value={data.firstName}
                        onChange={e => setProperty(i, 'firstName', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        className='last-name-input'
                        value={data.lastName}
                        onChange={e => setProperty(i, 'lastName', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        className='age-input'
                        value={data.age}
                        onChange={e => setProperty(i, 'age', e.target.value)}
                      />
                    </td>
                  </>
                  :
                  <>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.age}</td>
                  </>
                }
                <td>
                  <div className='actions'>
                    {rowsBeingEdited.includes(i) ?
                      <>
                        <td className='edit-icon'>
                          <FaRegCheckCircle
                            onClick={e => saveEdits(i)}
                          />
                        </td>
                        <td className='edit-icon'>
                          <FaRegTimesCircle
                            onClick={() => cancelEdit(i)}
                          />
                        </td>
                      </>
                      :
                      <td className='edit-icon'>
                        <FaRegEdit
                          onClick={() => edit(i)}
                        />
                      </td>
                    }
                  </div>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Solution;