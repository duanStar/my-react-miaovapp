import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './store/index';
import {BrowserRouter} from 'react-router-dom';
import './common/css/reset.css';
import './common/css/common.css';
import './common/css/class.css';
import './common/css/login.css';
import './common/css/index.css';
import './common/css/class.css';
import './common/css/teacher.css';
import './common/css/miiaov.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
