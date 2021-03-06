import React, { Component } from 'react';
import classie from 'classie';

class SideNav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    let button = $('#side-nav-btn');
    let sideNav = $('.sideNav');
    let homeDiv = $('#home-main');
    let sideNavLink = $('.overlay-content a');

    button.on('click', function () {
      sideNav.toggleClass('nav-toggled');
      homeDiv.toggleClass('toggled');
    });
  }

  render() {
    return (
      <div className="sideNav">
        <div className="overlay-content">
          <a href="">Link</a>
          <a href="">Link</a>
          <a href="">Link</a>
        </div>
      </div>
    );
  }
}

export default SideNav;
