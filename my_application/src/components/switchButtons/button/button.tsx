import React, {useEffect, useState} from 'react';
import styles from './button.module.sass'

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    type: "button" | "submit" | "reset" | undefined;
    value?:string;
}

export function Button(props : IButtonProps){
    let btn =
        <button className={props.className} type = {props.type} onClick={props.onClick}>
            {props.value}
        </button>
    return (
        btn
    )
}