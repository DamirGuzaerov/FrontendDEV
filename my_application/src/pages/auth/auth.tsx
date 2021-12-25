import styles from './auth.module.sass'
import logo from '../../assets/img/Watch_Later_Logo_Full.png'
import {AuthForm} from "../../components/form/form";
import {Link} from "react-router-dom";
export function Auth(){
    return(
        <div className={styles.authContainer}>
        <div className="auth">
            <div className={styles.logo}>
                <img src={logo} alt=""/>
            </div>
                <AuthForm />
                    <li className={styles.toLink}>Еще не зарегестрирвоаны ?
                        <Link to = "/registration" className={styles.regLink}>Регистрация</Link>
                    </li>
            </div>
        </div>
    )
}