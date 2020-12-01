import {Link} from "react-router-dom";
import React from 'react';
import 'react-clock/dist/Clock.css';

export function Navbar(){

    return(
        <div>

            <header style={headerStyle}>
                <div>
                    <Link to={'/'}><img src={"/images/pokemon.png"} alt=""/></Link>
                </div>
                <div>
                    <Link to="/pokemons">Pokemons</Link> | <Link to="/types">Types</Link>
                </div>
            </header>
        </div>

    )
}


const headerStyle = {
    textAlign: "center",
    padding: "10px"
}

export default Navbar;