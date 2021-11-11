import {Input} from "../input/input";
import React from "react";

export interface IFormProps extends React.HTMLAttributes<HTMLFormElement> {
}


export function Form(props:IFormProps){
    return(
        <>
            <Input type = "email" placeholder="E-mail"></Input>
            <Input type = "password" placeholder="Password"></Input>
        </>
    )
}