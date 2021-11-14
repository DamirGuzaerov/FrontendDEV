import {Input} from "../input/input";
import {Button} from "../button/button";
import React from "react";
import "./form.sass"

export interface IFormProps extends React.HTMLAttributes<HTMLFormElement> {
}


export function AuthForm(props:IFormProps){
    return(
        <div className="baseForm">
            <Input type = "email" placeholder="Адрес электронной почты" className="emailField"></Input>
            <Input type = "password" placeholder="Пароль"className="passField"></Input>
            <Button type={"button"} className="authBtn" value="Войти"></Button>
        </div>
    )
}