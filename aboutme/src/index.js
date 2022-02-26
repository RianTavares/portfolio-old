import React from 'react';
import { render } from 'react-dom';
import './assets/css/App.scss';
import App from './App';
import 'react-loading-skeleton/dist/skeleton.css'

render((
    <App/>    
), document.getElementById('root'));