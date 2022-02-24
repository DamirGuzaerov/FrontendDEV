import React, {FC} from "react";
import styles from "./banner.module.sass";
import Icon from "../icon/icon";

interface BannerProps{
    title:string,
    text:string,
    btnText:string,
    bgColor:string,
    bgImg:string,
    bgImgWidth:number,
    bgImgHeight:number
}

const Banner :FC<BannerProps> = (props) => {
    return (
        <div className={styles.bannerWrapper} >
            <div className={styles.banner} style={{"backgroundColor": `${props.bgColor}`}}>
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>{props.title}</h1>
                    <p className={styles.bannerText}>{props.text}</p>
                    <button className={styles.bannerBtn}>
                        <span className={styles.bannerBtnText}>{props.btnText}</span>
                    </button>
                </div>
                <div className={styles.bannerImg}>
                    <object data={props.bgImg} type=""></object>
                </div>
            </div>
        </div>
    );
}

export default Banner;

