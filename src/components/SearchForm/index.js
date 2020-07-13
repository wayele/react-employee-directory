import React from 'react'
import './style.css'

function SearchForm(props) {
    return (
        <form onSubmit={props.stopRefresh}>
            <div className="form">
                <input
                    value={props.search}
                    type="text"
                    name="search"
                    onChange={props.handleSearchChange}
                    placeholder="Filter"
                />
                {/* <button type="submit" onClick={props.handleSearchChange} className="btn btn-success">
                    Search
        </button> */}
            </div>
        </form>
    )
}

export default SearchForm
