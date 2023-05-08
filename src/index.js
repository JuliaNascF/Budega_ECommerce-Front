import React from 'react';
import ReactDOM from 'react-dom/client';
import {Details} from './pages/Details/index';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from "./styles/global"
import { Routes } from './routes'
import theme from "./styles/theme"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Routes/>

    </ThemeProvider>
  </React.StrictMode>
);

