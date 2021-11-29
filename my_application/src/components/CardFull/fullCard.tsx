import React, {useState} from "react";
import styles from "./fullCard.module.sass";
import {ICardProps} from "../card/card";
import plus from '../../assets/img/plus.png'

export function FullCard(props:ICardProps){
    return(
        <div className={styles.card}>
            <img className={styles.cardImg}src={props.posterImgUrl} alt={props.title} />
            <div className={styles.cardInfo}>
                <div className={styles.cardTitle}>{props.title}</div>
                <div className={styles.rateContainer}>
                    <div className={styles.year}>2020</div>
                    <div className={styles.cardRate}>{props.rate}</div>
                </div>
                <button className={styles.addBtn}><img className={styles.btnIcon} src={plus} alt=""/>Буду смотреть</button>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.genreContainer}>
                    {props.genre?.map((genre)=><div className={styles.genre}>{genre}</div>)}
                </div>
            </div>
        </div>
    )
}