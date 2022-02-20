import styles from './footer.module.sass'


const Footer = () =>
{
    return (
        <div className={styles.footer__wrapper}>
            <footer className={styles.footer}>
                <span className={styles.footerLink}>info@ecorus.ru</span>
                <span className={styles.footerLink}>+7 (800) 880-88-88</span>
            </footer>
        </div>
    )
}

export default Footer;