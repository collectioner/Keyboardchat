import React from 'react';
import classnames from 'classnames';

import { Button as BaseButton, ButtonProps as BaseButtonProps, withStyles } from '@material-ui/core';


import './button.scss';

const styles = {
    root: {
        '&:hover': {
            backgroundColor: '#50b1ff'
        },
        '&:disabled': {
            backgroundColor: '#758897'
        },
        'backgroundColor': '#6fafe3',

        '&&.disabled': {
            color: 'red'
        }
    }
};

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

export default withStyles(styles)(Button);
