import { useEffect, useState, useRef } from 'react';

const workerHandler = (fn) => {
  onmessage = (e) => {
    const num = e.data;

    if (Number.isInteger(parseInt(num))) {
      setTimeout(() => {
        postMessage(fn(num));
      }, num * 1000);
    } else {
      throw new Error('is not a number');
    }
  };
};

export const useWebWorker = (fn) => {
  const [result, setResult] = useState(null);
  const workerRef = useRef(null);

  useEffect(() => {
    const worker = new Worker(URL.createObjectURL(new Blob([`(${workerHandler})(${fn})`])));
    workerRef.current = worker;
    worker.onmessage = function (ev) {
      setResult(ev.data);
    };

    return () => {
      worker.terminate();
    };
  }, [fn]);

  return [result, (value) => {
    workerRef.current.postMessage(value);
  }];
};
