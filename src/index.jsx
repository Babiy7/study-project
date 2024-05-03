import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/index';
import './JavaScript/patterns/CreationalDesign/Factory/index';
import './JavaScript/patterns/CreationalDesign/Singleton/index';
import './JavaScript/patterns/CreationalDesign/Builder/index';
import './JavaScript/patterns/StructuralDesign/Decorator/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
