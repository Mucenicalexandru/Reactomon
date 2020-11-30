import React, {useState, createContext} from 'react';


export const ThemeContext = createContext(undefined);

//will provide the info to different components
export const ThemeProvider = (props) => {
    const [background, setBackground] = useState('');

    return (
        <ThemeContext.Provider value={[background, setBackground]}>
            {props.children}
        </ThemeContext.Provider>

    );
}
