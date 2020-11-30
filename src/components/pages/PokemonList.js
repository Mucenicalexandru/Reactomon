import axios from 'axios';
import './pages.css';
import {Link} from 'react-router-dom';
import {Button, Card} from 'react-bootstrap';
import {Col, Container, Row} from 'reactstrap';
import React, {useContext, useEffect, useState} from 'react';
import {ThemeContext} from "../../ThemeContext";
import styled from "styled-components";


function PokemonList(){

    const [background, setBackground] = useContext(ThemeContext);
    const Background = styled.div`
    background-color: ${background};
`

    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon');
    const [previousPage, setPreviousPage] = useState('');
    const [nextPage, setNextPage] = useState('');
    const [currentId, setCurrentId] = useState(1);


    useEffect(() =>{
        axios.get(currentPage)
            .then(res => {
                setPokemonList(res.data.results)
                setNextPage(res.data.next)
                setPreviousPage(res.data.previous)
            })
    }, [currentPage])


    return (
        <Background>
        <div style={buttonStyle}>
            {previousPage && <Button variant="outline-primary" onClick={() =>{
                setCurrentPage(previousPage);
                setCurrentId(currentId - 20)
            }

            }>Previous</Button>}


            {nextPage && <Button variant="outline-primary" onClick={() =>{
                setCurrentPage(nextPage);
                setCurrentId(currentId + 20)
            }
            }>Next</Button>}

        </div>

        <Container>
            <Row>
            {pokemonList.map((pokemon,index) =>{
                return <Col xs="4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`images/${index+currentId}.png`} />
                                    <Card.Body>
                                        <Card.Title style={{textAlign: 'center'}}>{pokemon.name}</Card.Title>
                                        <Button variant="primary">
                                                <Link
                                                    to={`/details/${index+currentId}`}
                                                    style={{color: 'white'}}>See details
                                                </Link>
                                        </Button>

                                    </Card.Body>
                            </Card>
                        </Col>
            })}
            </Row>
        </Container>
        </Background>
    )

}

const buttonStyle = {
    margin: 'auto',
    width: '10%',
    padding: '10px'
}

export default PokemonList;

