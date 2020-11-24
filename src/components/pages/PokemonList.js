import React from 'react';
import axios from 'axios';


class PokemonList extends React.Component{

    state = {
        data:{
            count: 0,
            next: '',
            previous: '',
            results: []
        }

    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon`)
            .then(response => this.setState({data: response.data}))
            .catch(function (error){
                console.log(error);
            })
    }

    render() {
        return <React.Fragment>
            <div>
                <ul>{this.state.data.results.map(result =>
                    <li>
                        {result.name}
                    </li>
                )}</ul>
            </div>

            {/*<div className="card" style="width: 18rem;">*/}
            {/*    <div className="card-body">*/}
            {/*        <h5 className="card-title">Card title</h5>*/}
            {/*        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the*/}
            {/*            card's content.</p>*/}
            {/*        <a href="#" className="btn btn-primary">Go somewhere</a>*/}
            {/*    </div>*/}
            {/*</div>*/}

            </React.Fragment>
    }
}


export default PokemonList;