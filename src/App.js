import React, { Component } from 'react';
import Navbar from './components/navbar';
import Login from './components/login';
import Signup from './components/signup';
import DemoLogin from './components/demoLogin';
import SignFormBase from './components/signFormBase';
import {Switch, Route} from 'react-router-dom';
import './_css/App.css';

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className="App">
        <Navbar location={location}/>
        <h1>App</h1>
        { (location.pathname === '/signup' || location.pathname === '/login') && <SignFormBase location={location}/> }
        
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/demo' component={DemoLogin}/>
        </Switch>
      </div>
    );
  }
}

export default App;
