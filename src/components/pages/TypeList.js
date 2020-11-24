import React from "react";
import axios from 'axios';

class TypeList extends React.Component{

    state = {
        data : {
            count: 0,
            next: '',
            previous: '',
            results: []
        }
    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/type`)
            .then(response => this.setState({data : response.data}))
            .catch(function (error){
                console.log(error);
            })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <ul>{this.state.data.results.map(result => <li>{result.name}</li>)}</ul>
                </div>
            </React.Fragment>
        )

    }
}

export default TypeList;