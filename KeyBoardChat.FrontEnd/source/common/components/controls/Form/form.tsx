import React, { ReactNode } from 'react';

import './form.scss';


interface FormProps {
    name: string;
    children: ReactNode;
}

export default function Form({ name, children }: FormProps) {
    return (
        <form className="form">
            <h2 className="form__name">{name}</h2>
            {children}
        </form>
    );
}
