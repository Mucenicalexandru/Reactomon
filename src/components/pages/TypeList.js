import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

function TypeList(){

    const [types, setTypes] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type')
            .then(response => setTypes(response.data.results))
    }, [types])

    return(
        <>
            {types.map(type => {
                return <div>{type.name}</div>
            })}
        </>

    )
}

export default TypeList;