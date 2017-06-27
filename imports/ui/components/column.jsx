import React, {Component} from 'react';

export default class Column extends Component {

  blocks() {
    return [
      {_id: 1, img_src: "http://via.placeholder.com/350x250", overlayTitle: "Block 1", overlayText: "Text 1"},
      {_id: 2, img_src: "http://via.placeholder.com/350x250", overlayTitle: "Block 2", overlayText: "Text 2"},
      {_id: 3, img_src: "http://via.placeholder.com/350x250", overlayTitle: "Block 3", overlayText: "Text 3"}
    ]
  }

  renderBlocks() {
    return this.blocks().map(block => {
      return (
        <div className="block">
          <img src={block.img_src} />
          <div className="overlay">
            <p className="overlay-title">{block.overlayTitle}</p>
            <p className="overlay-text">{block.overlayText}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="columns">
        {this.renderBlocks()}
      </div>
    );
  }
}
