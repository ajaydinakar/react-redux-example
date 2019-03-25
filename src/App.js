import React, { Component } from 'react';
import './App.css';
import Cont from './components/Cont';
import  Cont2 from './components/Cont2';

class App extends Component {
  render() {
    return (
      <div className="App">
     
       <Cont/>
       <Cont2/>
      </div>
    );
  }
}

export default App;
