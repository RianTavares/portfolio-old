import React from 'react';
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Main from './pages/Main';
import Project from './pages/Project';
import Bio from './pages/Bio';

const RoutesCpnt = () => (
  <HashRouter>
    <Routes>
      <Route index path="/" element={<Main />} />
      <Route path="/project/:slug" element={<Project />} />
      <Route path="/bio" element={<Bio />} />
    </Routes>
  </HashRouter>
);

export default RoutesCpnt;
