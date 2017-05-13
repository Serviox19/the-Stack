import React, { Component } from 'react';

export default class Carousel extends Component {
  constructor(props){
    super(props);
  }


  thumbnails() {
    return [
      {_id:1, label: "The Labbel Used", src:'http://placehold.it/900x500?text=1'},
      {_id:2, label: "The Labbel Used", src:'http://placehold.it/900x500?text=1'},
      {_id:3, label: "The Labbel Used", src:'http://placehold.it/900x500?text=1'},
      {_id:4, label: "The Labbel Used", src:'http://placehold.it/900x500?text=1'},
      {_id:5, label: "The Labbel Used", src:'http://placehold.it/900x500?text=1'},
    ]
  }

  renderThumbnails() {
    return this.thumbnails().map((thumbnail) => {
      return (
        <div className="col-md-4" key={thumbnail._id}>
          <div className="thumbnail" key={thumbnail._id}>
            <img src={thumbnail.src} />
            <div className="caption">
              <h3>{thumbnail.label}</h3>
            </div>
          </div>
        </div>
      )
    })
  }


  render() {
    return (
      <div>
        {this.renderThumbnails()}
      </div>
    )
  }
}
