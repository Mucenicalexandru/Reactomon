import axios from 'axios';
import './pages.css';
import {Button, Card} from 'react-bootstrap';
import {Col, Container, Row} from 'reactstrap';
import React, {useEffect, useState} from 'react';


function PokemonList(){

    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon');
    const [previousPage, setPreviousPage] = useState('');
    const [nextPage, setNextPage] = useState('');
    const [currentId, setCurrentId] = useState(1);

    console.log(currentId)
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
        <div style={buttonStyle}>
            <Button variant="outline-primary" onClick={() =>{
                setCurrentPage(previousPage);
                setCurrentId(currentId - 20)
            }

            }>Previous</Button>{' '}

            <Button variant="outline-primary" onClick={() =>{
                setCurrentPage(nextPage);
                setCurrentId(currentId + 20)
            }
            }>Next</Button>{' '}
        </div>

        <Container>
            <Row>
            {pokemonList.map((pokemon,index) =>{
                return <Col xs="3">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={`images/${index+currentId}.png`} />
                                    <Card.Body>
                                        <Card.Title>{pokemon.name}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">See details</Button>
                                    </Card.Body>
                            </Card>
                        </Col>
            })}
            </Row>
        </Container>
        </>
    )

}

const buttonStyle = {
    margin: 'auto',
    width: '10%',
    padding: '10px'
}

export default PokemonList;

