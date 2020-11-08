import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routesMap from 'common/constants/routes';
import WelcomePage from 'modules/welcome-page/components/WelcomePage/welcomePage';


const App = () => (
    <BrowserRouter>
        <div className="app__wrapper">
            <div className="app__content">
                <Switch>
                    <Route path={routesMap.Home.route}>
                        <div>Here is Home</div>
                    </Route>
                    <Route path="/">
                        <WelcomePage />
                    </Route>
                </Switch>
            </div>
        </div>
    </BrowserRouter>
);

export default App;
