/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useWebWorker } from './useWorker';

const WorkerTest = () => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState(0);
  const [result, run] = useWebWorker((k) => k * 2);

  const handleClick = () => {
    setText('Loading...');

    setTimeout(() => {
      run(number);
    }, 1000);
  };

  return (
    <div>
      <input onChange={(ev) => {
        setNumber(ev.target.value);
      }}
      />
      <button onClick={() => {
        handleClick();
      }}
      >
        Get number
      </button>
      <h1>
        {result || text}
      </h1>
    </div>
  );
};

export default WorkerTest;
