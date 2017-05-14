import React, { Component } from 'react';
import classie from 'classie';

class SideNav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    let button = $('#side-nav-btn');
    let sideNav = $('.sideNav');
    let carousel = $('#carousel');

    button.on('click', function () {
      if (sideNav.css('width') == '0px') {
        sideNav.css({ width: 250 });
        carousel.css({ marginLeft: 250 });
      } else if (sideNav.css('width') == '250px') {
        sideNav.css({ width: 0 });
        carousel.css({ marginLeft: 0 });
      }
    });
  }

  render() {
    return (
      <div className="sideNav">
        <div className="overlay-content">
          <a href="">Link</a>
        </div>
      </div>
    );
  }
}

export default SideNav;
