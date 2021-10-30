import React, { useState } from 'react';
import BEM from './css/BEM/BEM';
import './App.scss';

function App() {
  const [n, setN] = useState();
  console.log('dsfsd', n);
  return (
    <div className="App">
      <BEM />
      {/* <div className="box" />
      <div className="container">
        <div className="item red" />
        <div className="item yellow" />
        <div className="item green" />
        <div className="item blue" />
      </div> */}
    </div>
  );
}

export default App;

const array = [1, 2, 3, 4, 5];


console.log();
