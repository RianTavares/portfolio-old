import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/App.scss';
import Route from './routes';

render((
    <BrowserRouter>
        <Route/>
    </BrowserRouter>
), document.getElementById('root'));