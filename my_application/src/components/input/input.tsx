import React from 'react';
import './input.sass'

export interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
    type: string;
    className:string;
    placeholder?: string;
}

export function Input(props : IInputProps){
    return (
        <input type={props.type} placeholder={props.placeholder} className={props.className}/>
    )
}