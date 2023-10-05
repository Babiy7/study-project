import React from 'react';
import PropTypes from 'prop-types';
import './FlexBox.scss';

const FlexBox = (props) => {
  const {
    children, alignItems, justifyContent, flexDirection
  } = props;

  return (
    <div style={{
      display: 'flex', alignItems, justifyContent, flexDirection
    }}
    >
      {children}
    </div>
  );
};

FlexBox.propTypes = {
  children: PropTypes.element,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  flexDirection: PropTypes.string,
};

FlexBox.defaultProps = {
  children: <></>,
  alignItems: '',
  justifyContent: '',
  flexDirection: '',
};

export default FlexBox;
