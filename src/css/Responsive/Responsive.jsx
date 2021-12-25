import React from 'react';
import PropTypes from 'prop-types';
import './Responsive.scss';

const Responsive = (props) => {
  const { width, headerColor } = props;

  return (
    <div className="responsive">
      <div className="responsive__header">
        <h1>Header</h1>
      </div>
      <div className="responsive__body">
        <div className="responsive__body__side-bar">
          <h1>Side bar</h1>
        </div>
        <div className="responsive__body__content">
          <h1>Content</h1>
        </div>
      </div>
      <div className="responsive__footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
};

Responsive.propTypes = {
  width: PropTypes.number,
  headerColor: PropTypes.string,
};

Responsive.defaultProps = {
  width: 300,
  headerColor: '',
};

export default Responsive;
