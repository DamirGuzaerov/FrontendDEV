import React, {useState} from "react";
import "./card.sass"

export interface ICardProps {
    title:string,
    rate:string,
    posterImgUrl:string,
}

export function Card(props:ICardProps){
    return(
        <div className="card">
            <img className="cardBackground" src={props.posterImgUrl} alt={props.title} />
            <span className="cardTitle">{props.title}</span>
            <span className="cardRate">{props.rate}</span>
        </div>
        )
}