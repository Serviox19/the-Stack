import React, {Component} from 'react';

export default class Column extends Component {

  blocks() {
    return [
      {_id: 1, img_src: "http://via.placeholder.com/350x250", overlayTitle: "Block 1", overlayText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar rutrum arcu et rhoncus. Integer commodo elit nisi, ac cursus massa egestas ut. Nulla gravida nisi magna, id lobortis nulla tincidunt in."},
      {_id: 2, img_src: "http://via.placeholder.com/350x250", overlayTitle: "Block 2", overlayText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar rutrum arcu et rhoncus. Integer commodo elit nisi, ac cursus massa egestas ut. Nulla gravida nisi magna, id lobortis nulla tincidunt in."},
      {_id: 3, img_src: "http://via.placeholder.com/350x250", overlayTitle: "Block 3", overlayText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar rutrum arcu et rhoncus. Integer commodo elit nisi, ac cursus massa egestas ut. Nulla gravida nisi magna, id lobortis nulla tincidunt in."}
    ]
  }

  renderBlocks() {
    return this.blocks().map(block => {
      return (
        <div className="block" key={block._id}>
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
