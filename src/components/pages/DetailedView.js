import React, { useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import {Col, Container, ListGroup, ListGroupItem, Row} from "reactstrap";



//using styled component
const Name = styled.h1`
  text-align: center;
  color: #796666;
  border: solid;
  border-radius: 10px;
  box-shadow: 5px 10px #a19c9c;
`



function DetailedView(props){


    const [experience, setExperience]  = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [abilities, setAbilities] = useState([])
    const [species, setSpecies] = useState({})

    // id is taken from -> <Route path={'/details/:id'} component={DetailedView}/>
    let pokemonId = props.match.params.id

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then(res => {
                setExperience(res.data.base_experience)
                setHeight(res.data.height)
                setWeight(res.data.weight)
                setAbilities(res.data.abilities)
                setSpecies(res.data.species)
            })
    }, [pokemonId])

    return (
        <div>
            <Container>
                <Row>
                    <Col xs="6">
                        <img src={`/images/${pokemonId}.png`} alt=""/>
                        <Name>{species.name}</Name>

                    </Col>
                    <div style={listGroup}>
                        <Col xs="6">

                                <ListGroup >
                                    <ListGroupItem color="info">Experience : {experience}</ListGroupItem>
                                    <ListGroupItem color="info">Height : {height}</ListGroupItem>
                                    <ListGroupItem color="info">Weight : {weight}</ListGroupItem>
                                    {abilities.map((allAbilities, index) => {
                                        return <ListGroupItem color="info">Ability {index+1} : {allAbilities.ability.name}</ListGroupItem>
                                    })}
                                </ListGroup>
                        </Col>
                    </div>
                </Row>
            </Container>

        </div>
    )
}

const listGroup = {
    margin: 'auto',
    width: '50%',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '10px'
}
export default DetailedView;