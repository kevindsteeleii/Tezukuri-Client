import React, { Component } from 'react';
import Navbar from './containers/navbar';
import Hero from './components/hero';
import DemoLogin from './components/demoLogin';
import SignFormBase from './components/signFormBase';
import Footer from './components/footer';
import {Switch, Route} from 'react-router-dom';
import './_css/App.css';

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className="App">
        <Navbar location={location}/>
        <Hero/>
        <Switch>
          <Route path='/login' render={() => <SignFormBase location={location}/>}/>
          <Route path='/signup' render={() => <SignFormBase location={location}/>}/>
          <Route path='/demo' component={DemoLogin}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
