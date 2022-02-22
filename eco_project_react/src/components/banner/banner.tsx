import React, {FC} from "react";
import 'swiper/css/bundle'
import styles from "./banner.module.sass";
import {text} from "stream/consumers";

interface BannerProps{
    title:string,
    text:string,
    btnText:string,
    /*bgImg:string,
    backLayer:string*/
}

const Banner :FC<BannerProps> = (props) => {
    return (
        <div className={styles.banner__wrapper}>
            <div className={styles.banner}>
                <h1 className={styles.bannerTitle}>{props.title}</h1>
                <p className={styles.bannerText}>{props.text}</p>
                <button className={styles.bannerBtn}>
                    <span className={styles.bannerBtnText}>{props.btnText}</span>
                </button>
            </div>
        </div>
    );
}

export default Banner;

