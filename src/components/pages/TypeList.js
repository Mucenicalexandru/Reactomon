import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

function TypeList(){

    const [types, setTypes] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type')
            .then(response => setTypes(response.data.results))
    }, [types])

    return(
        <Container>
            <Row>
                {types.map(type => {
                    return <Col xs="3">{type.name}</Col>
                })}
            </Row>
        </Container>

    )
}

export default TypeList;