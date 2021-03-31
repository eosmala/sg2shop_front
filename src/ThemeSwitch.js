import React, {useState}from 'react'
import { ThemeProvider} from 'styled-components';
import { lightTheme, darkTheme } from './Themes';
import {GlobalStyles} from './Global'

export default function ThemeSwitch() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light');
    }
    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <button className="btn btn-outline-secondary" onClick={toggleTheme}>Vaihda teema</button>
          
        </>
      </ThemeProvider>
    );
    }