import axios from 'axios';
import { Link } from "react-router-dom";
import './pages.css';
import { Button } from 'react-bootstrap';
import React, { useState, useEffect} from 'react';
import TypeList from "./TypeList";



function PokemonList(){

    const [pokemon, setPokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon');


    return (

    )

}

export default PokemonList;

