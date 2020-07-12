import React from "react";

function ResultsList(props) {
    return (
        <div className="list-group list-group-horizontal-md">
            <ul >

                <li><img src={props.picture.thumbnail} /></li>
                <li>First Name: {props.firstName}</li>
                <li>Last Name: {props.lastName}</li>
                <li>Phone: {props.phone}</li>
                <li>Email: {props.email}</li>
                <li>DOB: {props.dob.date}</li>
            </ul>

        </div>
    )
}

export default ResultsList
