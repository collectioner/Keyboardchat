import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routesMap from 'common/constants/routes';
import SignInWindow from 'features/authorization/components/SignInWindow/signInWindow';
import SignUpWindow from 'features/authorization/components/SignUpWindow/signUpWindow';

import './welcomePage.scss';


export default function WelcomePage() {
    return (
        <div className="welcome">
            <Switch>
                <Route path={routesMap.Signup.route}>
                    <SignUpWindow />
                </Route>
                <Route path={routesMap.Authorization.route}>
                    <SignInWindow />
                </Route>
            </Switch>
        </div>
    );
}
