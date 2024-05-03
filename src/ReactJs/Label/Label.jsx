import React from 'react';
import PropTypes from 'prop-types';
import styles from './Lable.module.scss';

const Label = (props) => {
  const {
    children, small, large, noPadding, align
  } = props;

  return (
    <div className={[styles.label, small && styles.small, large && styles.large, noPadding && styles.noPadding].join(' ')} style={{ textAlign: align }}>{children}</div>
  );
};

Label.propTypes = {
  children: PropTypes.element.isRequired,
  small: PropTypes.bool,
  large: PropTypes.bool,
  noPadding: PropTypes.bool,
  align: PropTypes.string,
};

Label.defaultProps = {
  small: false,
  large: false,
  noPadding: false,
  align: 'left',
};

export default Label;
