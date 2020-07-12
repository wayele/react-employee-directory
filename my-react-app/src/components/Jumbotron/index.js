import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Employee Directory</h1>
                    <p className="lead">Clikc on carrots to filter by heading or use the search box to narrow your results.</p>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
