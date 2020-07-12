import React, { Component } from 'react';
import ResultsList from '../ResultsList';
import employees from '../../employees.json';
import API from '../../utils/API'

class ResultsListContainer extends Component {

    state = {
        employees: []
    }

    componentDidMount() {
        API.employees()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));

    }


    render() {
        return (
            <div>
                <ul className="list-group list-group-horizontal-md">
                    {this.state.employees.map(employee => (
                        <ResultsList
                            key={employee.id.value}
                            firstName={employee.name.first}
                            lastName={employee.name.last}
                            phone={employee.phone}
                            email={employee.email}
                            dob={employee.dob.date}
                            picture={employee.picture.thumbnail}
                        />


                    ))}
                </ul>

            </div>
        )
    }
}

export default ResultsListContainer
