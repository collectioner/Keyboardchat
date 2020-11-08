import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { Input as BaseInput, InputBaseProps, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import './input.scss';

const HOVER_UNDERLINE_COLOR = '#FA0';
const FOCUSED_UNDERLINE_COLOR = '#0AF';

const useStyles = makeStyles({
    'input': {
        'backgroundColor': '#222429',
        'color': '#c2c3c4',
        'padding': '2px 8px',

        '&&:hover::before': {
            borderBottomColor: HOVER_UNDERLINE_COLOR
        },

        '&&.Mui-focused::after': {
            borderBottomColor: FOCUSED_UNDERLINE_COLOR
        },

        '&&.MuiInput-underline::after': {
            borderBottomColor: FOCUSED_UNDERLINE_COLOR
        },

        '& .MuiInputBase-input': {
            textAlign: 'center'
        },

        '& .MuiInputAdornment-root': {
            position: 'absolute',
            right: '8px',
            width: '16px',
            height: '16px'
        }
    },

    'input--round': {
        'borderRadius': '8px',
        'backgroundColor': '#222429',

        '&::before': {
            borderBottom: 'none',
            transition: 'none',
            left: '6px',
            right: '6px'
        },

        '&::after': {
            left: '6px',
            right: '6px'
        }
    }
});

export interface InputProps extends InputBaseProps {
    inputClassName?: string;
    variant?: string;
    buttonNode?: ReactNode;
}

function Input(props: InputProps) {
    const {
        inputClassName,
        variant,
        buttonNode,
        ...restProps
    } = props;

    const classes = useStyles();

    const adornment = buttonNode
        ? (
            <InputAdornment position="end">
                {buttonNode}
            </InputAdornment>
        ) : null;

    const classList = classnames(
        'input',
        classes.input,
        { [classes['input--round']]: variant === 'round' },
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

export default Input;
