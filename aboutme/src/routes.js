import React from 'react';
import {
    HashRouter,
    Routes,
    Route
} from "react-router-dom";

import Main from './pages/Main';
import Project from './pages/Project';

const RoutesCpnt = () => {
    return (
        <HashRouter>
            <Routes>
                <Route index path='/' element={<Main />}/>
                <Route path='/project/:slug' element={<Project />}/>
            </Routes>
        </HashRouter>
    )
}

export default RoutesCpnt;
