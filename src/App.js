import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage}/>
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
