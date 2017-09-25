import React, { Component } from 'react';
import Header from './componets/Header.jsx'
import Body from './componets/Body.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          Hello
        </Header>
        <Body>

        </Body>
      </div>
    );
  }
}

export default App;
