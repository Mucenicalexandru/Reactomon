import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Navbar} from "./components/layout/Navbar";
import PokemonList from "./components/pages/PokemonList";
import DetailedView from "./components/pages/DetailedView";
import TypeList from "./components/pages/TypeList";
import {createGlobalStyle, ThemeProvider} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
  background-color: ${props => props.theme.mode === 'dark' ? '#111' : '#EEE'};
  color: ${props => props.theme.mode === 'dark' ? '#EEE' : '#111'};
  }

`

function App() {

    const [theme, setTheme] = useState({mode : 'light'})

    return (

        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Router>
                        <Navbar/>
                        <div style={headerStyle}>
                            <button onClick={() => setTheme(theme.mode === 'dark' ? {mode : 'light'} : {mode : 'dark'})}>{theme.mode === 'dark' ? "Switch to Day Mode" : "Switch to Night Mode"}</button>
                        </div>
                        <Route path={'/pokemons'} component={PokemonList}/>
                        <Route path={'/types'} component={TypeList}/>
                        <Route path={'/details/:id'} component={DetailedView}/>

            </Router>
        </ThemeProvider>
    )

}

const headerStyle = {
    textAlign: "center",
    padding: "10px"
}

export default App;