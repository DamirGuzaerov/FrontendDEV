import {Input} from "../ui/input/input";
import {Button} from "../ui/button/button";
import React, {useState} from "react";
import  "./form.sass"
import {observer} from "mobx-react";
import authorizationStore from "../../stores/authorizationStore";
import {useStores} from "../../utils/stores-utils";

export interface IFormProps extends React.HTMLAttributes<HTMLFormElement> {
}

export const AuthForm = observer((props:IFormProps)=>{
    const {authStore:{GetToken,SetToken}} = useStores()

    const [login,setLogin] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [loginFieldClass,setLoginClass] = useState<string>('emailField');
    const [passFieldClass,setPassClass] = useState<string>('passField');
    const [messageClass,setMessageClass] = useState<string>('messageHide');

    function submitForm() {
        GetStatus();
    }

    function fieldHandler(){
        loginField.props.onChange({login});
        passField.props.onChange({password});
        setPassClass("passField");
        setLoginClass("emailField");
        setMessageClass("messageHide")
    }

    function GetStatus() {
        if (login!="login"||password!='password'){
            setLoginClass("emailField error");
            setPassClass("passField error");
            setMessageClass("messageShow");
            alert("Ошибка")
        }
        else {
            SetToken("тестовый токен (по хорошему тут должен быть какой-то хэш)")
            alert(GetToken())
        }
    }

    let passField =<Input type = "password" placeholder="Пароль" className={passFieldClass}
                          value={password}
                          onChange={setPassword}
                          onHandler={fieldHandler}
    >
    </Input>
    let loginField =<Input type = "email" placeholder="Адрес электронной почты" className={loginFieldClass}
                           value = {login}
                           onChange={setLogin}
                           onHandler={fieldHandler}>
    </Input>
    let message = <div className={messageClass}>Неверные логин или пароль</div>
    return(
        <div className="baseForm">
            {loginField}
            {passField}
            {props.children}
            {message}
            <Button type={"button"} className="authBtn" value="Войти" onClick={submitForm}></Button>
        </div>
    )
})

export const RegForm = observer(()=>{
    const {authStore:{GetToken,SetToken}} = useStores()

    const [login,setLogin] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [passwordRepeat,setPasswordRepeat] = useState<string>('');
    const [loginFieldClass,setLoginClass] = useState<string>('emailField');
    const [passFieldClass,setPassClass] = useState<string>('passField');
    const [passwordRepeatClass,setPasswordRepeatClass] = useState<string>('passField');
    const [messageClass,setMessageClass] = useState<string>('messageHide');

    function submitForm() {
        GetStatus();
    }

    function fieldHandler(){
        setPassClass("passField");
        setPasswordRepeatClass("passField")
        setMessageClass("messageHide")
    }

    function GetStatus() {
        if (passwordRepeat!=password){
            setPassClass("passField error");
            setPasswordRepeatClass("passField error")
            setMessageClass("messageShow");
        }
        else {
            SetToken("тестовый токен (по хорошему тут должен быть какой-то хэш)")
            alert(GetToken())
        }
    }

    let passField =<Input type = "password" placeholder="Пароль" className={passFieldClass}
                          value={password}
                          onChange={setPassword}
                          onHandler={fieldHandler}
    >
    </Input>
    let loginField =<Input type = "email" placeholder="Адрес электронной почты" className={loginFieldClass}
                           value = {login}
                           onChange={setLogin}
                           onHandler={fieldHandler}>
    </Input>
    let repeatPassField =<Input type = "password" placeholder="Повторите пароль" className={passwordRepeatClass}
                                value={passwordRepeat}
                                onChange={setPasswordRepeat}
                                onHandler={fieldHandler}
                                id="repeat"
    >
    </Input>
    let message = <div className={messageClass}>Пароли не совпадают</div>

    return(
        <div className="baseForm">
            {loginField}
            {passField}
            {repeatPassField}
            {message}
            <Button type={"button"} className="authBtn" value="Регистрация" onClick={submitForm}></Button>
        </div>
    )
})
