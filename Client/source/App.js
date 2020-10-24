import { hot } from 'react-hot-loader/root';
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ROUTES } from 'shared';

import { Welcome, Home } from './pages';

import './App.scss';

const App = () => (
    <BrowserRouter>
        <div className="app">
            <div className="app__wrapper">
                <div className="app__content">
                    <Switch>
                        <Route path={ROUTES.Home.route}>
                            <Home></Home>
                        </Route>
                        <Route path="/">
                            <Welcome></Welcome>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    </BrowserRouter>
);

export default hot(App);
