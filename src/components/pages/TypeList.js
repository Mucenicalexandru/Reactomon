import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Col, Container, ListGroup, ListGroupItem, Row} from 'reactstrap';


function TypeList(){


    const [types, setTypes] = useState([])


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type')
            .then(response => setTypes(response.data.results))
    }, [types])

    return(
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

    )
}

const typeStyle = {
    textAlign: 'center',
    fontWeight: 'bold'
}

export default TypeList;