import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 49PX;
  background-color: #242424;
  opacity = 0.8;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
         <div className="wrapper">
         <SayFullName name="Sergey" surname="Petrov" link="vk.com" />
         <SayFullName name="Marina" surname="Polischuk" link="indeed.com" />
         <SayFullName name="Alex" surname="Siluanov" link="mail.ru" />
         </div>
         <div className="App">
          <HeaderWrapper>
            <Grid>
              <Header/>
            </Grid>
          </HeaderWrapper>
          <Main/>
          <Menu/>      

         </div>



        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}


function SayFullName(props){
  return(
    <div>
    <h1> Моё имя (props.name), фамилия - (props.surname)</h1>
    <a href={props.link}> Ссылка на мой профиль </a>
    </div>
    )
}

export default App
