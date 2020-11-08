import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { Input as BaseInput, InputBaseProps, InputAdornment } from '@material-ui/core';

import './input.scss';


export interface InputProps extends InputBaseProps {
    inputClassName?: string;
    variant?: string;
    buttonNode?: ReactNode;
}

export default function Input(props: InputProps) {
    const {
        inputClassName,
        variant,
        buttonNode,
        ...restProps
    } = props;

    const adornment = buttonNode
        ? (
            <InputAdornment position="end">
                {buttonNode}
            </InputAdornment>
        ) : null;

    const classList = classnames(
        'input',
        inputClassName
    );

    return (
        <BaseInput
            className={classList}
            endAdornment={adornment}
            {...restProps}
        />
    );
}
