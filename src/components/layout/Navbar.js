import {Link} from "react-router-dom";
import React from 'react';
import 'react-clock/dist/Clock.css';

function Navbar(){


    return(
        <header style={headerStyle}>

                <img src={"/images/pokemon.png"} alt=""/>

            <div>
                <Link to="/pokemons">Pokemons</Link> | <Link to="/types">Types</Link>
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