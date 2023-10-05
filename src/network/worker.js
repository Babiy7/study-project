onmessage = (e) => {
  const num = e.data;

  if (Number.isInteger(parseInt(num))) {
    const result = 127;

    postMessage(result);
  } else {
    throw new Error('is not a number');
  }
};
