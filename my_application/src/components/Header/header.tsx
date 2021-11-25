import styles from './header.module.sass'
import logo from '../../assets/img/Watch_Later_Logo_Short.png'
import search from '../../assets/img/search_icon.png'
import filmIcon from '../../assets/img/collection_btn.png'
import plus from '../../assets/img/plus.png'
export function Header() {
    return(
        <div className={styles.headerContainer}>
            <div className={styles.header}>
                <div className={styles.twoElementsContainer}>
                    <button className={styles.activeNavBtn}><img className={styles.btnIcon} src={filmIcon} alt=""/>Коллекция</button>
                    <button className={styles.navBtn}><img className={styles.btnIcon} src={plus} alt=""/>Добавить</button>
                </div>
                <img src={logo} alt=""/>
                <div className={styles.twoElementsContainer}>
                    <button className={styles.navBtn}><img className={styles.btnIcon} src={search} alt=""/>Поиск</button>
                    <div className={styles.profileImg}></div>
                </div>
            </div>
        </div>
        )
}
