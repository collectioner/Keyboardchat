import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import { ROUTES } from 'shared/Routes';
import { Welcome, Home } from './pages';

import './App.scss';

const App = () => (
    <div>Test output</div>
    /*
    <BrowserRouter>
        <div className="app">
            <div className="app__wrapper">
                <div className="app__content">
                    <Switch>
                        <Route path={ROUTES.Home.route}>
                            <Home />
                        </Route>
                        <Route path="/">
                            <Welcome />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    </BrowserRouter> */
);

export default App;
