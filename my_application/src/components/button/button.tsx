import React from 'react';
import styles from './button.module.sass'

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    type: "button" | "submit" | "reset" | undefined;
    value?:string;
}

export function Button(props : IButtonProps){
    return (
        <button className={styles.authButton} type = {props.type} onClick={props.onClick}>
            {props.value}
        </button>
)
}