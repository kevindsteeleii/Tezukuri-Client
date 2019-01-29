import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CategoryNav from '../components/categoryNav';
import { demoLogIn, logOff } from '../_actions/baseActions';
import React, { Component } from 'react';
import '../_css/App.css';

class Navbar extends Component{
  state = {
    searchTerm: ''
  }
  
  componentDidUpdate() {
    const { loggedIn, location } = this.props;
    const { pathname } = location;
    const login = document.querySelector('#login');
    const signup = document.querySelector('#signup');
    const demo = document.querySelector('#demo');
    const signout = document.querySelector('#signout');
    
    (loggedIn || pathname === '/login')? login.classList.add('nav-active') : login.classList.remove('nav-active');
    (loggedIn || pathname === '/signup')? signup.classList.add('nav-active') : signup.classList.remove('nav-active');
    (loggedIn || pathname === '/demo')? demo.classList.add('nav-active') : demo.classList.remove('nav-active');
    loggedIn? signout.classList.remove('nav-active') : signout.classList.add('nav-active');
  }

  handleChange = evt => {
    this.setState({ searchTerm: evt.target.value })
  }

  shoppingCart = evt => {
    alert('Shopping Cart Works!!')
  }

  handleSearch = evt => {
    const { searchTerm } = this.state;
    console.log(searchTerm);
    //_TODO: add the functionality for the search here in exchange of the following alert
    alert(`Search Term was: ${searchTerm}` );
    this.setState({ searchTerm: '' });
    evt.preventDefault();
  }

  render() {
  const { logOff, demoLogin } = this.props;
  const { searchTerm } = this.state;
  return(
    <>
    <nav id="navbar">
      <div className="navbar-left">
        <NavLink className="navy left-link" exact to="/"><i className="fas fa-hand-holding-heart"></i>Te-Zukuri</NavLink>  
      </div>
      <form id="search-form" onSubmit={this.handleSearch}>
          <input onChange={this.handleChange} type="text" name="search" id="search" maxLength="20" value={searchTerm}/>
          <button value="submit">Search</button>
        </form>
      <div className="navbar-right">
        <NavLink id="login" className="navy" activeClassName="nav-active" to="/login"><i className="fas fa-sign-in-alt"></i>Login </NavLink>
        <NavLink id="signup" className="navy" activeClassName="nav-active" to="/signup"><i className="fas fa-user-plus"></i>Signup </NavLink>
        <NavLink id="demo" className="navy" to='/demo' onClick={demoLogin} ><i className="fas fa-running"></i>Demo </NavLink>
        <NavLink id="signout" className="navy nav-active" activeClassName="nav-active" exact to="/" onClick={logOff}><i className="fas fa-sign-out-alt"></i>Signout </NavLink>
        <NavLink id="cart" className="navy" to="/cart" onClick={this.shoppingCart}><i className="fas fa-shopping-cart"></i> Cart</NavLink>
      </div>
    </nav>
    <CategoryNav categories={['jewelry-and-accessories', 'clothing-and-shoes', 'sculpture', 'vintage', 'other-crafts']}/>
    </>
    )
  }
}

const mapStateToProps = state =>  ({
  loggedIn: state.base.demoLoggedIn
});

const mapDispatchToProps = dispatch => ({
  demoLogin: () => dispatch(demoLogIn()),
  logOff: () => dispatch(logOff())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
