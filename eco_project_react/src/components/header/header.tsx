import React from "react";
import styles from "./header.module.sass";

function Header() {
    return (
            <div className={styles.header__wrapper}>
                <header className={styles.header}>
                    <nav className={styles.navPanel}>
                        <div className={styles.header__logo}>
                            <img src="assets/images/ecorusLogo.png" alt="EcoRusLogo"/>
                        </div>
                        <ul className={styles.navList}>
                            <li className={styles.navLink}>
                                Главная
                            </li>
                            <li className={styles.navLink}>
                                Пункты сбора
                            </li>
                            <li className={styles.navLink}>
                                ЭкоМаркет
                            </li>
                            <li className={styles.navLink}>
                                О сервисе
                            </li>
                        </ul>
                    </nav>
                    <ul className={styles.navList}>
                        <li className={styles.navLink}>
                            <img src="assets/images/view-box.png" className={styles.header__icon}/>
                                Казань
                        </li>
                        <li className={styles.navLink}>
                            <img src="assets/images/Union.png" className={styles.header__icon}/>
                                Войти
                        </li>
                    </ul>
                </header>
            </div>
    );
}

export default Header;

