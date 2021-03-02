import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './redux/store';
import {rerenderEntireTree} from './render'

rerenderEntireTree(store)
reportWebVitals();
