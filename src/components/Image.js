import * as React from "react";
import PropTypes from "prop-types";

export default function Image({ image }) {
  return (
    <React.Fragment>
      <img src={image} className="first-slide" alt="" />
    </React.Fragment>
  );
}

Image.propTypes = {
  image: PropTypes.string
};
