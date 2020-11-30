import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components'
import {ThemeContext} from '../../ThemeContext.js';

function Switches() {

    const [background, setBackground] = useContext(ThemeContext);
    const [off, setOn] = useState(false);



    return (
        <div>
            <button onClick={() => {
                setOn(!off)
            }}>{off ? "Day Mode" : "Night Mode" }</button>
        </div>
    );
}



export default Switches;