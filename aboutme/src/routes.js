import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Main from './pages/Main';

const RoutesCpnt = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Main />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesCpnt;
