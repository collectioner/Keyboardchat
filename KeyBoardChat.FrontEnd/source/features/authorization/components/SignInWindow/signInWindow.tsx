import React from 'react';

import routesMap from 'common/constants/routes';
import AuthorizationForm from 'features/authorization/components/AuthorizationForm/authorizationForm';


export default function SignInWindow() {
    const navigationLink = {
        name: "Don't have account? Register!",
        href: routesMap.Signup.route
    };

    return (
        <div className="sign-in">
            <AuthorizationForm
                formName="Sign In"
                buttonLabel="Login"
                navigationLink={navigationLink}
            />
        </div>
    );
}
