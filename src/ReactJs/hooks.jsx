/* eslint-disable react/button-has-type */
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
};

const {
  INCREMENT,
  DECREMENT,
  RESET
} = actionTypes;

function init(initialCount) {
  return {
    count: initialCount,
    disabledDecBtn: true,
    disabledIncBtn: false,
    disabledResetBtn: true,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT: {
      const newCount = state.count + 1;
      return { count: newCount, disabledIncBtn: newCount === 10, disabledResetBtn: newCount === 0 };
    }
    case DECREMENT: {
      const newCount = state.count - 1;
      return { count: newCount, disabledDecBtn: newCount === 0 };
    }
    case RESET:
      return init(action.payload);
    default:
      throw new Error();
  }
}

const Hooks = (props) => {
  const { initialCount } = props;
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  const {
    count, disabledDecBtn, disabledIncBtn, disabledResetBtn
  } = state;

  const onClickHandler = (type) => {
    dispatch({
      type,
      payload: type === RESET ? 0 : count,
    });
  };

  return (
    <div style={{ width: '850px', display: 'flex' }}>
      <div>
        <button
          style={{ padding: '100px' }}
          disabled={disabledIncBtn}
          onClick={() => onClickHandler(INCREMENT)}
        >
          Add
        </button>
      </div>
      <p>
        count:
        {count}
      </p>
      <button
        disabled={disabledDecBtn}
        onClick={() => onClickHandler(DECREMENT)}
      >
        Remove
      </button>
      <button
        disabled={disabledResetBtn}
        onClick={() => onClickHandler(RESET)}
      >
        Reset
      </button>
    </div>
  );
};

Hooks.propTypes = {
  initialCount: PropTypes.number,
};

Hooks.defaultProps = {
  initialCount: 0,
};

export default Hooks;
