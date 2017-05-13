import React, { Component } from 'react';

export default class Carousel extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    $('.carousel').carousel({ interval: 1500 });
  }

  slides() {
    return [
      {_id:1, caption: "Slide 1", src:'http://placehold.it/1440x500?text=1'},
      {_id:2, caption: "Slide 2", src:'http://placehold.it/1440x500?text=2'},
      {_id:3, caption: "Slide 3", src:'http://placehold.it/1440x500?text=3'},
      {_id:4, caption: "Slide 4", src:'http://placehold.it/1440x500?text=4'},
      {_id:5, caption: "Slide 5", src:'http://placehold.it/1440x500?text=5'}
    ]
  }

  renderSlides() {
    return this.slides().map(slide => {
      return (
        <div className="item" key={slide._id}>
          <img className="slide-img" src={slide.src} />
          <div className="carousel-caption"></div>
        </div>
      );
    })
  }


  render() {
    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="http://placehold.it/1440x500?text=0" />
            <div className="carousel-caption"></div>
          </div>
          {this.renderSlides()}
        </div>
        <a className="left carousel-control" href="#carousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
