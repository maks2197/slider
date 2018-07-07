import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

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

export default App;
