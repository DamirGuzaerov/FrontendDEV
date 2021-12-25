import styles from '../auth/auth.module.sass'
import logo from "../../assets/img/Watch_Later_Logo_Full.png";
import {RegForm} from "../../components/form/form";
import {Link} from "react-router-dom";

export function Registration(){
    return(
        <div className={styles.auth}>
            <div className={styles.authContainer}>
                <img className={styles.logo} src={logo} alt=""/>
                <RegForm />
                <li className={styles.toLink}>Есть логин и пароль для входа ?
                    <Link to = "/auth" className={styles.regLink}>Войти</Link>
                </li>
            </div>
        </div>
    )
}