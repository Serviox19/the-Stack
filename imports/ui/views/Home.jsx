import React, { Component } from 'react';
import Navbar from '../../ui/components/nav';
import SideNav from '../../ui/components/sideNav';
import Slider from '../../ui/components/slider';
import Column from '../../ui/components/column';


class Home extends Component {
  componentDidMount() {
    $(".button-fill").hover(function () {
       $(this).children(".button-inside").addClass('full');
    }, function() {
       $(this).children(".button-inside").removeClass('full');
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <SideNav />
        <div id="buttons">
          <a href="#">
            <div className="button-fill">
              <div className="button-text">Hello</div>
              <div className="button-inside">
                <div className="inside-text">LOL</div>
              </div>
            </div>
          </a>
        </div>
        <div id="home-main">
          <Slider />
          <Column />
        </div>
      </div>
    );
  }
}


export default Home;
