import React from 'react';

import routesMap from 'common/constants/routes';
import AuthorizationForm from 'features/authorization/components/AuthorizationForm/authorizationForm';


export default function SignUpWindow() {
    const navigationLink = {
        name: 'Already have account? Sig in!',
        href: routesMap.Authorization.route
    };

    return (
        <AuthorizationForm
            formName="Sign Up"
            buttonLabel="Register"
            navigationLink={navigationLink}
        />
    );
}

