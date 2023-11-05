import React from 'react'

const CheckTable = (props) => {
    const {students,index}=props
    const dateString = (students.date);
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-GB");
  return (
    <>
      <td>{index + 1}</td>
            <td>{students.name}</td>
            <td>{students.rollnumber}</td>
            <td>{students.currentedu}</td>
            <td>{students.currentyear}</td>
            <td>{students.stdbranch}</td>
            <td>{formattedDate}</td>
    </>
  )
}

export default CheckTable
