import * as React from 'react';
import classNames from 'classnames';

export default function Image({ image, avatar, cover }) {
    const classes = classNames({
      'featurette-image img-fluid mx-auto': avatar,
      'first-slide': cover
    });
    return (
      <React.Fragment>
        <img src={image} className={classes} alt="" />
      </React.Fragment>
    );
}