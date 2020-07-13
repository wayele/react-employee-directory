import React from 'react'

function TableRows(props) {
    return (
        <tbody>
            <tr>
                <td><img alt={props.firstName} src={props.picture} /></td>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.phone}</td>
                <td>{props.email}</td>
                <td>{props.age}</td>
            </tr>
        </tbody>
    )
}

export default TableRows
