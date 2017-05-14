import React, { Component } from 'react';

class SideNav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    $('#side-nav-btn').on('click', function () {
      $('.sideNav').css({ width: 250 });
      $('#home-main').css({ marginLeft: 250 });
    });
    $('.closebtn').on('click', function () {
      $('.sideNav').css({ width: 0 });
      $('#home-main').css({ marginLeft: 0 });
    });
  }

  render() {
    return (
      <div className="sideNav">
        <a href="javascript:void(0)" className="closebtn">&times;</a><br />
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
