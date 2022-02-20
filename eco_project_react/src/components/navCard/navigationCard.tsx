import React, {FC} from "react";
import styles from "./navigationCard.module.sass";

interface NavCardProps{
    title:string,
    text:string
}
const NavCard :FC<NavCardProps> = (props) => {
    return (
        <div className={styles.navCard__wrapper}>
            <div className={styles.navCard}>
                <h1 className={styles.navCardTitle}>{props.title}</h1>
                <p className={styles.navCardText}>{props.text}</p>
                <button className={styles.navCardBtn}>
                    <span className={styles.navCardBtnText}>-))</span>
                </button>
            </div>
        </div>
    )
}

export default NavCard;

