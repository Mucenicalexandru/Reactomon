import React, {useContext, useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import {Container, Row, Col, ListGroupItem, ListGroup} from 'reactstrap';
import {ThemeContext} from "../../ThemeContext";
import styled from 'styled-components';



function TypeList(){

    const [background, setBackground] = useContext(ThemeContext);
    const [types, setTypes] = useState([])

    const Background = styled.div`
    background-color: ${background};
`

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type')
            .then(response => setTypes(response.data.results))
    }, [types])

    return(
        <Background>
            <Container>
                <Row style={typeStyle}>
                    {types.map(type => {
                        return <Col xs='3' style={{marginTop: "20px"}}>
                                    <ListGroup>
                                        <ListGroupItem color="info">{type.name}</ListGroupItem>
                                    </ListGroup>
                                </Col>
                            })}
                </Row>
            </Container>
        </Background>

    )
}

const typeStyle = {
    textAlign: 'center',
    fontWeight: 'bold'
}

export default TypeList;