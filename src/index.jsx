import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { Employee } from './JavaScript/patterns/factories/factories';
// import './JavaScript/main/13-context-call-apply-bind';
// import './JavaScript/patterns/CreationalDesign/Prototype/Prototype';
// import './JavaScript/OOD__ObjectOrientedDesign/SOLID/4. I'
// import './JavaScript/OOD__ObjectOrientedDesign/SOLID/3. L'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// context();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
