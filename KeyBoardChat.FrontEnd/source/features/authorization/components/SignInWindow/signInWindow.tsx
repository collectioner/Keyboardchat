import React, { useState, useRef } from 'react';
import { useHistory, NavLink } from 'react-router-dom';

import Button from 'common/components/controls/buttons/Button/button';
import Input from 'common/components/controls/inputs/Input/input';
import PasswordInput from 'common/components/controls/inputs/PasswordInput/passwordInput';
import Form from 'common/components/controls/Form/form';

import './signInWindow.scss';

interface CredentialsPanelProps {
    onLoginChanged: (value: string) => void;
    onPasswordChanged: (value: string) => void;
    onPasswordKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

function CredentialsPanel(props: CredentialsPanelProps) {
    const { onLoginChanged, onPasswordChanged, onPasswordKeyDown } = props;

    const passwordRef = useRef<HTMLInputElement | null>(null);

    const onLoginKeyupHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            passwordRef.current?.focus();
        }
    };

    const onLoginChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onLoginChanged(event.target.value);
    };

    const onPasswordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onPasswordChanged(event.target.value);
    };

    return (
        <React.Fragment>
            <Input
                inputClassName="sign-in__login-input"
                placeholder="Enter login"
                onChange={onLoginChangeHandler}
                onKeyDown={onLoginKeyupHandler}
                autoFocus
            />
            <PasswordInput
                inputRef={passwordRef}
                className="sign-in__pass-input"
                placeholder="Enter password"
                onChange={onPasswordChangeHandler}
                onKeyDown={onPasswordKeyDown}
            />
        </React.Fragment>
    );
}

export default function SignInWindow() {
    const routeHistory = useHistory();

    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('');

    const onLoginHandler = () => {
        console.log(password);
    };

    const onPasswordKeyupHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onLoginHandler();
        }
    };

    const onLoginChangedHandler = (value: string) => {
        setLogin(value);
    };

    const onPasswordChangedHandler = (value: string) => {
        setPassword(value);
    };

    return (
        <div className="sign-in">
            <Form name="SignIn">
                <CredentialsPanel
                    onLoginChanged={onLoginChangedHandler}
                    onPasswordChanged={onPasswordChangedHandler}
                    onPasswordKeyDown={onPasswordKeyupHandler}
                />
                <Button
                    onClick={onLoginHandler}
                    disabled={login.length === 0 || password.length === 0}
                >
                    Login
                </Button>
                <NavLink
                    className="sign-in__register"
                    to="/signup"
                >
                    Don't have account? Register!
                </NavLink>
            </Form>
        </div>
    );
}
