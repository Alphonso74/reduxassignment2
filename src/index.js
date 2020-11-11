import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from "./store/reducer";

import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux'

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
