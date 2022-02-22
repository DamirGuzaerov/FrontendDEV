import React, {FC} from "react";
import styles from "./navigationCard.module.sass";
import rightArrow from "../../assets/images/rightArrow.png"

interface NavCardProps{
    title:string,
    text:string,
    bgImg:string
}
const NavCard :FC<NavCardProps> = (props) => {
    return (
        <div className={styles.navCard__wrapper}>
            <div className={styles.navCard}>
                <div className={styles.navCardContent}>
                    <h1 className={styles.navCardTitle}>{props.title}</h1>
                    <p className={styles.navCardText}>{props.text}</p>
                    <button className={styles.navCardBtn}>
                        <img src={rightArrow} alt=""/>
                    </button>
                </div>
                <div className={styles.navCardImgWrapper}>
                    <img src={props.bgImg} className={styles.navCardImg}/>
                </div>
            </div>
        </div>
    )
}

export default NavCard;

