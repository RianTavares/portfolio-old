import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Main from './pages/Main';
import Project from './pages/Project';

const RoutesCpnt = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Main />}/>
                <Route path='/project/:id' element={<Project />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesCpnt;
