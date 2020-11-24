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
            <div className='container'>
                <ul>
                    {this.state.data.results.map(result =>
                        <div className="card" style={{width: 18 + 'rem'}}>
                            <div className="card-body">
                                <a href='#'>{result.name}</a>
                                {/*<img src="/images/001.png" alt=""/>*/}
                            </div>
                        </div>
                )}
                </ul>
            </div>
            
            <div>
                <img src="/images/001.png" alt=""/>
                <img src="/images/002.png" alt=""/>
                <img src="/images/003.png" alt=""/>
            </div>




            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>


            </React.Fragment>
    }
}


export default PokemonList;