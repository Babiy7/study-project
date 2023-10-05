import React from 'react';
import PropTypes from 'prop-types';
import styles from './Lable.module.scss';

const Label = (props) => {
  const {
    children, small, large, noPadding
  } = props;

  return (
    <div className={[styles.label, small && styles.small, large && styles.large, noPadding && styles.noPadding].join(' ')}>{children}</div>
  );
};

Label.propTypes = {
  children: PropTypes.element.isRequired,
  small: PropTypes.bool,
  large: PropTypes.bool,
  noPadding: PropTypes.bool,
};

Label.defaultProps = {
  small: false,
  large: false,
  noPadding: false,
};

export default Label;
