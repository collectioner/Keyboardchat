import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input} from '@material-ui/core';

import './Welcome.scss';
import Socket from '../../Socket';
import { Button } from '../index';

const Login = ({onLogin}) => {
    const [login, setLogin] = useState('');
    
    const onLoginHandler = () => {
        let request = {
            name: login
        };
        Socket.emit('auth', request);
    }

    useEffect(() => {
        // ??? Maybe you will must to replace Socket.off with Socket.off('responce', handleFunction)
        Socket.on('auth', data => {
            console.log("Auth data = ", data);
            if (data.successful) {
                console.log("Authorization success!");
                onLogin();
            } else {
                console.error("Authorization failed!");
            }
        });
        return () => Socket.off('response');
    }, [])

    return (
        <div className="login">
            <Input className="login__login" placeholder="Enter name" onChange={e => setLogin(e.target.value)} 
                onKeyDown={e => {
                    if (e.key == 'Enter')
                        onLoginHandler(e)
                }} autoFocus={true}></Input>
            <Button className="button" variant="contained" color="secondary" onClick={onLoginHandler}>Login</Button>
        </div>
    )
}

Login.propTypes = {
    onLogin: PropTypes.func.isRequired
};

const Welcome = ({onLogin}) => {
    useEffect(() => {
        Socket.on('responce', (data) => {
            if (data.type == 'authSucc') {
                onLogin();
            }
        })
    });

    return (
        <div className="welcome">
            <Login onLogin={onLogin}></Login>
        </div>
    )
}

Welcome.propTypes = {
    onLogin: PropTypes.func.isRequired
}

export default Welcome;