import React from 'react'

const AttendanceTable = (props) => {
    const { attend, index } = props
    const dateString = (attend.date);
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-GB");
    return (
        <>
            <td>{index + 1}</td>
            <td>{attend.name}</td>
            <td>{attend.rollnumber}</td>
            <td>{attend.currentedu}</td>
            <td>{attend.currentyear}</td>
            <td>{attend.stdbranch}</td>
            <td>{formattedDate}</td>

        </>
    )
}

export default AttendanceTable
