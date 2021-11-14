import React from 'react';
import './button.sass'
export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    type: "button" | "submit" | "reset" | undefined;
    value?:string;
}

export function Button(props : IButtonProps){
    return (
        <button type = {props.type}>
            {props.value}
        </button>
)
}