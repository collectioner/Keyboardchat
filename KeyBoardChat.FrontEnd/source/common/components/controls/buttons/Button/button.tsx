import React from 'react';
import classnames from 'classnames';

import { Button as BaseButton, ButtonProps as BaseButtonProps } from '@material-ui/core';

import './button.scss';


interface ButtonProps extends BaseButtonProps {
    disabled: boolean;
}

function Button(props: ButtonProps) {
    const { disabled, ...ownProps } = props;

    const className = classnames(
        'button',
        disabled
    );

    return (
        <BaseButton
            variant="contained"
            className={className}
            {...ownProps}
        />
    );
}

Button.defaultProps = {
    disabled: false
};

export default Button;
