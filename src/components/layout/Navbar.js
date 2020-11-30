import {Link} from "react-router-dom";
import React, {useContext} from 'react';
import 'react-clock/dist/Clock.css';
import {ThemeContext} from '../../ThemeContext.js';
import Switches from './Switches.js'
import styled from "styled-components";


function Navbar(){

    const [background, setBackground] = useContext(ThemeContext);

    const Background = styled.div`
    background-color: ${background};
`

    return(
        <Background>
            <header style={headerStyle}>
                <div>
                    <Link to={'/'}><img src={"/images/pokemon.png"} alt=""/></Link>
                </div>
                <div>
                    <Link to="/pokemons">Pokemons</Link> | <Link to="/types">Types</Link> | <Switches/>
                </div>
                <div>
                    Mucenic Alexandru {background}
                </div>
            </header>
        </Background>

    )
}


const headerStyle = {
    textAlign: "center",
    padding: "10px"
}


const titleStyle = {
    color: "#00008b"
}

export default Navbar;