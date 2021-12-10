import './registration.sass'
import logo from "../../assets/img/Watch_Later_Logo_Full.png";
import {RegForm} from "../../components/form/form";
import {Link} from "react-router-dom";

export function Registration(){
    return(
        <div className="auth">
            <div className="authContainer">
                <img src={logo} alt=""/>
                <RegForm />
                <li className="toLink">Есть логин и пароль для входа ?
                    <Link to = "/auth" className="regLink">Войти</Link>
                </li>
            </div>
        </div>
    )
}