import React, {useContext} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import PokemonList from "./components/pages/PokemonList";
import DetailedView from "./components/pages/DetailedView";
import TypeList from "./components/pages/TypeList";
import {ThemeProvider} from "./ThemeContext";
import {ThemeContext} from './ThemeContext.js';
import styled from 'styled-components'

function App() {

    return (
        <>
            <Router>
                <ThemeProvider>
                    <Navbar/>
                    <Route path={'/pokemons'} component={PokemonList}/>
                    <Route path={'/types'} component={TypeList}/>
                    <Route path={'/details/:id'} component={DetailedView}/>
                </ThemeProvider>
            </Router>
        </>
    )

}


export default App;