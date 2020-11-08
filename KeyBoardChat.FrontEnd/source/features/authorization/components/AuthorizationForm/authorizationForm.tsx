import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import Button from 'common/components/controls/buttons/Button/button';
import Input from 'common/components/controls/inputs/Input/input';
import PasswordInput from 'common/components/controls/inputs/PasswordInput/passwordInput';
import Form from 'common/components/controls/Form/form';
import LinkModel from 'common/models/linkModel';

import './authorizationForm.scss';


interface AuthorizationFormProps {
    formName: string;
    buttonLabel: string;
    navigationLink: LinkModel;
}

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

export default function AuthorizationForm(props: AuthorizationFormProps) {
    const {
        navigationLink: {
            name,
            href
        },
        buttonLabel,
        formName
    } = props;

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
            <Form name={formName}>
                <CredentialsPanel
                    onLoginChanged={onLoginChangedHandler}
                    onPasswordChanged={onPasswordChangedHandler}
                    onPasswordKeyDown={onPasswordKeyupHandler}
                />
                <Button
                    onClick={onLoginHandler}
                    disabled={login.length === 0 || password.length === 0}
                >
                    {buttonLabel}
                </Button>
                <NavLink to={href}>
                    {name}
                </NavLink>
            </Form>
        </div>
    );
}
