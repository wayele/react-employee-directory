import React, { Component } from 'react';
import SearchForm from '../SearchForm';
// import '../../employees.json'


class SearchContainer extends Component {
    state = {
        search: "",
    };

    // When this component mounts, display list of people
    // componentDidMount() {
    //     this.searchEmployee("employees");
    // }


    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }
    handleFormSubmit = event => {
        event.preventDefault();

        // need to query the list based on the search when form is submitted
    }

    render() {
        return (
            <div>
                <SearchForm />

            </div>
        )
    }
}

export default SearchContainer
