import React from 'react';
import classnames from 'classnames';
import { IconButton as BaseIconButton, IconButtonProps as BaseIconButtonProps } from '@material-ui/core';

import './iconButton.scss';

interface IconButtonProps extends BaseIconButtonProps {
    buttonClassName?: string;
}

export default function IconButton({ buttonClassName, ...restProps }: IconButtonProps) {
    const className = classnames(
        'icon-btn',
        buttonClassName
    );

    return (
        <BaseIconButton
            className={className}
            {...restProps}
        />
    );
}
