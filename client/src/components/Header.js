import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="#e53935 red darken-1">
        <div className="nav-wrapper container">
          <a className="left brand-logo">Emaily</a>
          <ul className="right hide-on-med-and-down">
            <li><a>Login With Google</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
