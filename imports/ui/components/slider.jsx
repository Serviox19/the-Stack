import React, { Component } from 'react';
import Swiper from 'swiper';


export default class Slider extends Component {
  componentDidMount() {
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      mousewheelControl: false,
      speed: 400,
      // spaceBetween: 100,
      autoplay: 2000
    });
  }

  slides() {
    return [
      {_id:1, caption: "Slide 1", src:'http://placehold.it/1440x500?text=2'},
      {_id:2, caption: "Slide 2", src:'http://placehold.it/1440x500?text=3'},
      {_id:3, caption: "Slide 3", src:'http://placehold.it/1440x500?text=4'},
      {_id:4, caption: "Slide 4", src:'http://placehold.it/1440x500?text=5'},
      {_id:5, caption: "Slide 5", src:'http://placehold.it/1440x500?text=6'}
    ]
  }


  renderSlides() {
    return this.slides().map(slide => {
      return (
        // individual slides
        <div className="swiper-slide" key={slide._id}>{slide.caption}</div>
      );
    })
  }


  render() {
    return (
      <div className="swiper-container">

        <div className="swiper-wrapper">
          {this.renderSlides()}
        </div>

        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    );
  }
}
