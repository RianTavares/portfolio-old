import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './page/App';

const Routes = () => (
    <div>
    <Switch>
        <Route exact path='/' component={Main}/>
    </Switch>
    </div>
)

export default Routes;