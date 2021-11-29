import React, {useState} from "react";
import styles from "./card.module.sass";

export interface ICardProps {
    id?:number,
    title?:string,
    rate?:string,
    posterImgUrl?:string,
    description?:string,
    genre?:string[],
}

export function Card(props:ICardProps){
    return(
        <div className={styles.card}>
            <img className={styles.cardImg}src={props.posterImgUrl} alt={props.title} />
            <div className={styles.cardRate}>{props.rate}</div>
            <div className={styles.cardTitle}>{props.title}</div>
        </div>
        )
}