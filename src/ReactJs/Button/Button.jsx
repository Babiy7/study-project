import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) => {
  const {
    children, onClick, marginTop, marginBottom, marginLeft, marginRight, isTimerButton, seconds
  } = props;
  const [timer, setTimer] = useState(seconds);
  const [isStartedTimer, setIsStartedTimer] = useState(false);
  const interval = useRef();

  const handleTimer = () => {
    interval.current = setInterval(() => {
      setTimer((count) => count - 1);
    }, 1000);
  };

  useEffect(() => {
    if (timer === seconds && isStartedTimer) {
      handleTimer();
    }

    if (timer === -1) {
      clearInterval(interval.current);
      setIsStartedTimer(false);
      setTimer(seconds);
    }
  }, [isStartedTimer, timer]);

  return (
    <div className={styles.buttonWrapper}>
      <button
        style={{
          marginTop, marginBottom, marginLeft, marginRight
        }}
        onClick={() => {
          if (isTimerButton) {
            setTimeout(() => {
              onClick();
            }, seconds * 1000);
          } else {
            onClick();
          }
          setIsStartedTimer(true);
        }}
        className={styles.button}
        type="button"
      >
        <div className={styles.content}>
          <div style={{ marginTop: isTimerButton && '4px' }}>
            {children}
          </div>
          {isTimerButton && (
          <div className={styles.timer}>
            {timer}
          </div>
          )}
        </div>
      </button>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  isTimerButton: PropTypes.bool,
  seconds: PropTypes.number,
};

Button.defaultProps = {
  onClick: () => {},
  marginTop: '0px',
  marginBottom: '0px',
  marginLeft: '0px',
  marginRight: '0px',
  isTimerButton: false,
  seconds: 5,
};

export default Button;
