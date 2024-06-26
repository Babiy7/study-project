/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './Positioning.scss';

const Positioning = ({
  tabPosition: {
    name, top, left, right, bottom,
  },
}) => (
  <div
    className="positioning"
    onClick={(e) => console.log('e:', e.target.tagName)}
  >
    <div
      className={`positioning__tab positioning__tab_${name}`}
      style={{
        top,
        left,
        right,
        bottom,
      }}
    >
      Tab
      {' '}
      {name}
    </div>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
      <div className="positioning__block">
        <p className="positioning__block__title">item</p>
        <p>{item}</p>
      </div>
    ))}
  </div>
);

Positioning.propTypes = {
  tabPosition: PropTypes.shape({
    name: PropTypes.string,
    top: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
  }),
};

Positioning.defaultProps = {
  tabPosition: {
    name: 'sticky',
    top: '-1px',
    left: '0px',
    right: '0px',
    bottom: '0px',
  },
};

export default Positioning;
