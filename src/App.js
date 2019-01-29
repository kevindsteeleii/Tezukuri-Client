import React, { Component } from 'react';
import Navbar from './containers/navbar';
import Gallery from './containers/gallery';
import Hero from './components/hero';
// _BELOW: this is for test purposes only
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
        {/* <Hero/> */}
        {/* _NOTE: Gallery Card is here for testing purposes only and should be removed and place in a container that generates based on the category of item */}
        {/* <GalleryCard title="Lorem Ipsum" mainPicture="cardMain.jpg" rating={1} price={1.22}/>  */}
        <div id="main">
          <Switch>
            <Route path='/login' render={() => <SignFormBase location={location}/>}/>
            <Route path='/signup' render={() => <SignFormBase location={location}/>}/>
            <Route path='/demo' component={DemoLogin}/>
            {/* <Route exact path='/idk' component={Hero}/> */}
            <Route exact path='/' render={() => <Gallery dummyNumber={30}/>}/>
          </Switch> 
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
