import styles from './footer.module.sass'
import Icon from "../icon/icon";


const Footer = () =>
{
    return (
        <div className={styles.footer__wrapper}>
            <footer className={styles.footer}>
                <div className={styles.footerIcon}>
                    <Icon name={"mail"} height={24} width={24}/>
                </div>
                <span className={styles.footerLink}>info@ecorus.ru</span>
                <div className={styles.footerIcon}>
                    <Icon name={"phone"} height={24} width={24}/>
                </div>
                <span className={styles.footerLink}>+7 (800) 880-88-88</span>
            </footer>
        </div>
    )
}

export default Footer;