import * as React from 'react';
import Image from './Image';

export default function Cover({ image }) {
    return (
      <React.Fragment>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <Image image={image} cover />
              <div className="cover__upload" />
              <div className="container">
                <div className="carousel-caption d-none d-md-block text-left">
                  <h1>{'Quanto você sabe sobre Star Wars?'}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}