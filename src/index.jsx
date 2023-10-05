import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/index';
// import './JavaScript/patterns/CreationalDesign/Singleton/Singleton';
// import './JavaScript/patterns/StructuralDesign/Façade/Façade';
import './JavaScript/patterns/FunctionalDesign/memoization';
import './JavaScript/main/15-XHR';

// import './JavaScript/main/6-closures';
// import './JavaScript/ecmaScript6/2_arrow_functions';
// import './JavaScript/main/8-prototype';
// import './JavaScript/ecmaScript6/8_iterators_generators';
// import './JavaScript/ecmaScript6/7_symbols';
// import './JavaScript/patterns/CreationalDesign/Singleton/Singleton';
// import './scriptSofia';

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
