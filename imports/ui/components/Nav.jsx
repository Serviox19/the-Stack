import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-toggle" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">App</a>
          </div>
          <div className="collapse navbar-collapse" id="nav-toggle">
            <ul className="nav navbar-nav">
              <li><a href="">Link</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="">Login</a></li>
                <li><a href="">Signup</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
