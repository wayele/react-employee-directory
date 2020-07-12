import React from 'react'
import './style.css'

function SearchForm(props) {
    return (
        <form>
            <div className="form">
                <input
                    value={props.search}
                    type="text"
                    name="search"
                    onChange={props.handleInputChange}
                    placeholder="Search"
                />
                <button onClick={props.handleFormSubmit}>Submit</button>
            </div>
        </form>
    )
}

export default SearchForm
