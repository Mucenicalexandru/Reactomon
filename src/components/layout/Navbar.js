import {Link} from "react-router-dom";
import React from 'react';
import 'react-clock/dist/Clock.css';
import Switch from "./Switches";
import { BrowserRouter as Router, Route} from 'react-router-dom';

function Navbar(){


    return(
        <header style={headerStyle}>
            <div>
                <Link to={'/'}><img src={"/images/pokemon.png"} alt=""/></Link>
            </div>
            <div>
                <Link to="/pokemons">Pokemons</Link> | <Link to="/types">Types</Link> | <Switch/>
            </div>

        </header>
    )
}


const headerStyle = {
    color: "#fff",
    textAlign: "center",
    padding: "10px"
}


const titleStyle = {
    color: "#00008b"
}

export default Navbar;