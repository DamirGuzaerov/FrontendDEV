import React from 'react';

export interface IInputProps extends React.HTMLAttributes<HTMLInputElement> {
    type: string;
    placeholder?: string;
}

export function Input(props : IInputProps){
    return (
        <input type={props.type} placeholder={props.placeholder}/>
    )
}