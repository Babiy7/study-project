import React, { useState } from 'react';
// import BEM from './css/BEM/BEM';
import './App.scss';

function App() {
  const [n, setN] = useState();
  return (
    <div className="App">
      {/* <BEM /> */}
      <div className="box" />
      <div className="container">
        <div className="circle red" />
        <div className="circle yellow" />
        <div className="circle green" />
        <div className="circle blue" />
      </div>
    </div>
  );
}

export default App;
