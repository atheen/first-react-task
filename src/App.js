import React from 'react';
import './App.css';

//data
import items from './items.js'

//styles
import GlobalStyle from './styles.js'
import {ThemeProvider} from 'styled-components'
import {Title,Description,LogoImage} from './components/styles.js'

//list
import ItemsList from './components/ItemsList.js'


const theme = {
  primaryColor: "#343d52",
  secondaryColor: "#717786",
  backgroundColor: "#FFFFFF",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div className="App">
        <header className="App-header">
        <Title>WELCOME TO THE APPLE STORE</Title>
        <Description>where you can buy any apple product!</Description>
        <LogoImage src="https://www.apple.com/ac/structured-data/images/open_graph_logo.png?201809240543" alt="logo" />
        <hr/>
          <ItemsList/>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
