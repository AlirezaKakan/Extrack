import React, { Component } from 'react';
import SideBar from './components/side-menu/sidebar'
import Expenses from './components/Expenses'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <Expenses />
      </div>
    );
  }
}

export default App;
