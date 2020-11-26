import axios from 'axios';
import { Link } from "react-router-dom";
import './pages.css';
import { Button } from 'react-bootstrap';
import React, { useState, useEffect} from 'react';
import TypeList from "./TypeList";



function PokemonList(){

    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon');
    const [previousPage, setPreviousPage] = useState();
    const [nextPage, setNextPage] = useState();



    useEffect(() =>{
        axios.get(currentPage)
            .then(res => {
                setPokemonList(res.data.results)
                setNextPage(res.data.next)
                setPreviousPage(res.data.previous)
            })
    }, [currentPage])


    return (
        <>
            {pokemonList.map(pokemon =>{
                return <div>{pokemon.name}</div>
            })}

            <Button variant="outline-primary" onClick={() =>
            setCurrentPage(previousPage)}>Previous</Button>{' '}

            <Button variant="outline-primary" onClick={() =>
            setCurrentPage(nextPage)}>Next</Button>{' '}
        </>
    )

}

export default PokemonList;

