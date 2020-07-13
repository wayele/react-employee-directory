import React, { Component } from 'react';
import API from '../utils/API'
import TableHeader from '../TableHeader';
import TableRows from '../TableRows';
import './style.css'
import SearchForm from '../SearchForm';


class ResultsListContainer extends Component {

    state = {
        search: "",
        employees: [],
        results: [],
        error: ""
    }

    componentDidMount() {
        API.employees()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        event.preventDefault();
        this.setState({ search: event.target.value })
        console.log("Hello")
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.employees.filter(item => {
            // merge data together, then see if user input is anywhere inside
            let values = Object.values(item)
                .join("")
                .toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredEmployees: filteredList });
        console.log(this.state.employees);
    }

    stopRefresh = event => {
        event.preventDefault();
        return;
    }

    render() {
        return (
            <div>
                <SearchForm handleSearchChange={this.handleInputChange} />
                <table className="table">
                    <TableHeader />
                    {this.state.employees.map(employee => (
                        <TableRows
                            key={employee.id.value}
                            firstName={employee.name.first}
                            lastName={employee.name.last}
                            phone={employee.phone}
                            email={employee.email}
                            age={employee.dob.age}
                            picture={employee.picture.thumbnail}
                        />
                    ))}
                </table>
            </div>
        )
    }
}

export default ResultsListContainer
