import React, {Dispatch, SetStateAction} from 'react';
import './input.sass'

export interface IInputProps{
    type: string;
    className:string;
    placeholder?: string;
    value?:string;
    onChange:Dispatch<SetStateAction<string>>;
    id?:string;
    children?:never[];
    onHandler:()=>void;
}

export function Input(props : IInputProps){

    const handleChange = (value:any):void =>{
        props.onChange(value);
        props.onHandler();
    }

    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            className={props.className}
            onChange={(e)=> handleChange(e.target.value)}
        />
    )
}