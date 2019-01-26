import React, { Component } from 'react';
import '../_css/forms.css';

export default class SignFormBase extends Component {
  state = {
    username: '',
    password: '',
    email: ''
  }

  handleChange = evt =>  {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit = evt =>  {
    evt.preventDefault();
    this.clearInput();
  }

  clearInput = () => {
    const username = '', password = '', email = '';
    this.setState({ username, password, email });
  }

  render() {
    const { username, password, email } = this.state;
    const { location } = this.props;
    return (
      <form id='signForm' onSubmit={this.handleSubmit}>
        <input className="navy" onChange={this.handleChange} placeholder="username" value={username} type="text" name="username" maxLength="30"/>
        <input className="navy" onChange={this.handleChange} placeholder="email" hidden={location.pathname === '/login'} value={email} type="email" name="email" maxLength="30"/>
        <input className="navy" onChange={this.handleChange} placeholder="password" value={password} type="password" name="password" maxLength="30"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
