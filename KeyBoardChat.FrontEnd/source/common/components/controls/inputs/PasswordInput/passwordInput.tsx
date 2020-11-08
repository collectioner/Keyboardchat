import React, { useState } from 'react';
import classnames from 'classnames';
import { InputAdornment } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontAwesomeIcons from '@fortawesome/free-solid-svg-icons';

import Input, { InputProps } from 'common/components/controls/inputs/Input/input';
import IconButton from 'common/components/controls/buttons/IconButton/iconButton';

import './passwordInput.scss';


interface PasswordInputProps extends InputProps {
    className?: string;
}

export default function PasswordInput({ className, ...restProps }: PasswordInputProps) {
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const handleClickShowPassword = () => {
        setIsPasswordShown(!isPasswordShown);
    };

    const icon = isPasswordShown
        ? FontAwesomeIcons.faEye
        : FontAwesomeIcons.faEyeSlash;

    const inputClassName = classnames(
        'input-pass',
        className
    );

    const buttonNode = (
        <InputAdornment position="end">
            <IconButton
                onClick={handleClickShowPassword}
                edge="end"
            >
                <FontAwesomeIcon icon={icon} />
            </IconButton>
        </InputAdornment>
    );

    return (
        <Input
            type={isPasswordShown ? 'text' : 'password'}
            className={inputClassName}
            buttonNode={buttonNode}
            {...restProps}
        />
    );
}
