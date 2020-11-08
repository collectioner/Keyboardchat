import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routesMap from 'shared/routes';


const App = () => (
    <BrowserRouter>
        <div className="app__wrapper">
            <div className="app__content">
                <Switch>
                    <Route path={routesMap.Home.route}>
                        <Home />
                    </Route>
                    <Route path="/">
                        <Welcome />
                    </Route>
                </Switch>
            </div>
        </div>
    </BrowserRouter>
);

export default App;
