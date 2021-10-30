import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <div className="box" />
      <div className="container">
        <div className="item red" />
        <div className="item yellow" />
        <div className="item green" />
        <div className="item blue" />
      </div> */}
      <div className="items">
        <div id="item" className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
        <div className="item" />
      </div>
    </div>
  );
}

export default App;
