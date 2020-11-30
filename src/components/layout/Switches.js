import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components'
import {ThemeContext} from '../../ThemeContext.js';

function Switches() {

    const [background, setBackground] = useContext(ThemeContext);
    const [dayTheme, setDayTheme] = useState(true);


    useEffect(() => {
        if(!dayTheme){
            setBackground('black')
        }
    }, [dayTheme])


    return (
            <button onClick={() => {
                if(dayTheme){
                    setDayTheme(false)
                }else{
                    setDayTheme(true)
                }
            }}>Switch Theme</button>
    );
}



export default Switches;