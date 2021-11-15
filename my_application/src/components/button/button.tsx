import React from 'react';
import './button.sass'
export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    type: "button" | "submit" | "reset" | undefined;
    value?:string;
}

export function Button(props : IButtonProps){
    return (
        <button className={props.className} type = {props.type} onClick={props.onClick}>
            {props.value}
        </button>
)
}