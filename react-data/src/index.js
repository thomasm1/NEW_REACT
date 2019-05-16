//import './util1.json';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/boilerplate.css';
import './css/index.css';
import App from './App';
import registerServiceWorker from './js/utils/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
