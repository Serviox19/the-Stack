import React, { Component } from 'react';

export default class Carousel extends Component {
  componentDidMount() {
    $('.carousel').carousel({ interval: 2000 });
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

  renderIndicators() {
    return this.slides().map(li => {
      return (
        <li data-target="#carousel" data-slide-to={li._id}></li>
      );
    })
  }

  renderSlides() {
    return this.slides().map(slide => {
      return (
        <div className="item" key={slide._id}>
          <img className="slide-img" src={slide.src} />
          <div className="carousel-caption">
            <h3>{slide.caption}</h3>
          </div>
        </div>
      );
    })
  }


  render() {
    return (
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" className="active"></li>
          {this.renderIndicators()}
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src="http://placehold.it/1440x500?text=0" />
            <div className="carousel-caption">
              <h3>Slide 0</h3>
            </div>
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
