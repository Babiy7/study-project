/* eslint-disable react/prefer-stateless-function */
/* eslint-disable arrow-body-style */
/* eslint-disable object-curly-newline */
import React, { useCallback, useMemo, useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends React.Component {
  render() {
    const { callback } = this.props;
    console.log('ChildComponent render');
    return (
      <div>
        ChildComponent
        <button type="button" onClick={callback}>
          Click on child button
        </button>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  callback: PropTypes.func.isRequired,
};

// Get random value
const useCustomHook = (props) => {
  const [randomValue, setRandomValue] = useState(0);

  useEffect(() => {
    setRandomValue(Math.round(Math.random() * 100));
  }, []);

  return randomValue;
};

const Memoization = ({ a }) => {
  const [update, setUpdate] = useState(true);
  const randomValue = useCustomHook();

  const computeExpensiveValue = (a) => (a * 25) / 2 + 100;

  //
  // useCallback
  //
  //  Буде писати в консоль той самий парамент 'а', навіть якщо він зміниться, напише інакший параметр 'a' тільки тоді, коли зміниться параметр 'update'
  const memoizedCallback = useCallback(
    (e) => {
      console.log('memoizedCallback a', a);
    },
    [update]
  );

  // Буде писати завжди новий параметр 'a'
  const notMemoizedCallback = () => {
    console.log('notMemoizedCallback a', a);
  };

  //
  // useMemo
  //
  //  Буде викликатись тільки тоді коли зміниться параметр 'a' , а якщо ні то буде повертати той самий результат.
  const memoizedValue = useMemo(() => computeExpensiveValue(a), [a]);

  console.log('render');

  return (
    <div>
      <button type="button" onClick={memoizedCallback}>
        Click on callback
      </button>
      {memoizedValue}
      {/* <ChildComponent callback={memoizedCallback} /> */}
    </div>
  );
};

Memoization.propTypes = {
  a: PropTypes.number,
};

Memoization.defaultProps = {
  a: 10,
};

const shouldNotUpdateComponent = (prevProps, nextProps) => prevProps.a !== nextProps.a;

export default memo(Memoization, shouldNotUpdateComponent);
