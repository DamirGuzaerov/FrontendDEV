import './auth.sass'
import logo from '../../assets/img/Watch_Later_Logo_Full.png'
import {AuthForm} from "../../components/form/form";
import {BrowserRouter, Link} from "react-router-dom";
export function Auth(){
    return(
        <div className="auth">
            <div className="authContainer">
                <img src={logo} alt=""/>
                <AuthForm />
                    <li className="toLink">Еще не зарегестрирвоаны ?
                        <Link to = "/registration" className="regLink">Регистрация</Link>
                    </li>
            </div>
        </div>
    )
}