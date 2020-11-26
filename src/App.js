import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import PokemonList from "./components/pages/PokemonList";
import DetailedView from "./components/pages/DetailedView";
import TypeList from "./components/pages/TypeList";
import Example from "./components/pages/Example";



function App() {

    return (
        <>
            <Router>
                <Navbar/>
                <Route path={'/pokemons'} component={PokemonList}/>
                <Route path={'/types'} component={TypeList}/>
                <Route path={'/example'} component={Example}/>
            </Router>
        </>
    )
}


export default App;