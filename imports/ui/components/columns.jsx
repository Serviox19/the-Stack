import React  from 'react';

const Columns = ({overlayTitle, overlayText}) => {
  return (
    <div className="columns">
      <div className="block">
        <img src='http://via.placeholder.com/350x250' />
        <div className="overlay">
          <p className="overlay-title">{overlayTitle}</p>
          <p className="overlay-text">{overlayText}</p>
        </div>
      </div>
      <div className="block">
        <img src='http://via.placeholder.com/350x250' />
        <div className="overlay">
          <p className="overlay-title">{overlayTitle}</p>
          <p className="overlay-text">{overlayText}</p>
        </div>
      </div>
      <div className="block">
        <img src='http://via.placeholder.com/350x250' />
        <div className="overlay">
          <p className="overlay-title">{overlayTitle}</p>
          <p className="overlay-text">{overlayText}</p>
        </div>
      </div>
    </div>
  );
}

export default Columns;
