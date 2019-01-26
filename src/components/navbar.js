import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { demoLogIn, logOff } from '../_actions/baseActions';
import '../_css/App.css';
import React from 'react';

const loginToggle = (props) => {
  const { loggedIn, location } = props;
  const { pathname } = location;
  
  if (pathname === '/demo') {
    props.demo();
  }
  let signInLinks = Array.from(document.getElementsByClassName('nav-logged-in'));
  signInLinks.forEach(link => {
    loggedIn? link.classList.add('nav-active') : link.classList.remove('nav-active');
  });
}

function Navbar(props) {
  loginToggle(props);
  return (
    <nav id="navbar">
      <div className="nav-link navbar-left">
        <NavLink className="navy" exact to="/"><i className="fas fa-hand-holding-heart"></i> Te-Zukuri</NavLink>
      </div>
      <div className="navbar-right">
        <NavLink className="navy nav-link nav-logged-in" activeClassName="nav-active" to="/login"><i className="fas fa-sign-in-alt"></i>Login </NavLink>
        <NavLink className="navy nav-link nav-logged-in" activeClassName="nav-active" to="/signup"><i className="fas fa-user-plus"></i>Signup </NavLink>
        <NavLink className="navy nav-link" activeClassName="nav-active" to="/demo"><i className="fas fa-running"></i>Demo </NavLink>
        <NavLink className="navy nav-link" activeClassName="nav-active" exact to="/signout" onClick={props.logoff}><i className="fas fa-sign-out-alt"></i>Signout </NavLink>
      </div>
    </nav>
  );
}

const mapStateToProps = state =>  ({
  loggedIn: state.base.demoLoggedIn
});

const mapDispatchToProps = dispatch => ({
  demo: () => dispatch(demoLogIn()),
  logoff: () => dispatch(logOff())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
