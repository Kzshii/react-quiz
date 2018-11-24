import * as React from "react";
import Image from "./Image";
import PropTypes from "prop-types";

export default function Cover({ image }) {
  const Header = "Quanto você sabe sobre Star Wars?";
  return (
    <React.Fragment>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <Image image={image} />
            <div className="cover__upload" />
            <div className="container">
              <div className="carousel-caption d-none d-md-block text-left">
                <h1>{Header}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Cover.propTypes = {
  image: PropTypes.string
};
