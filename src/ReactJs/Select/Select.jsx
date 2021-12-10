/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

const Select = (props) => {
  const { options, size } = props;

  return (
    <select
      className="select"
      size={size}
      onChange={({ target: { value } }) => {
        console.log('value', value);
      }}
    >
      {options.map((option) => (
        <option className="select__option" {...option}>
          {option.option}
        </option>
      ))}
    </select>
  );
};

Select.defaultProps = {
  size: 1,
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  size: PropTypes.number,
};

export default Select;
