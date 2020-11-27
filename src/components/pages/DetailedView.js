import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PokemonList from "./PokemonList";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ListGroup, ListGroupItem} from "reactstrap";

function DetailedView(props){

    const [experience, setExperience]  = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [abilities, setAbilities] = useState([])

    // id is taken from -> <Route path={'/details/:id'} component={DetailedView}/>
    let pokemonId = props.match.params.id

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then(res => {
                setExperience(res.data.base_experience)
                setHeight(res.data.height)
                setWeight(res.data.weight)
            })
    })

    return (
        <>
            <div style={listGroup}>
                <ListGroup >
                    <ListGroupItem color="info">Experience : {experience}</ListGroupItem>
                    <ListGroupItem color="info">Height : {height}</ListGroupItem>
                    <ListGroupItem color="info">Weight : {weight}</ListGroupItem>
                    <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
                </ListGroup>
            </div>
        </>
    )
}

const listGroup = {
    margin: 'auto',
    width: '25%',
    textAlign: 'center',
    fontWeight: 'bold'
}
export default DetailedView;