import styles from "./cardsCollection.module.sass";
import {Card, ICardProps} from "../card/card";
import {Link} from "react-router-dom";
import {useStores} from "../../utils/stores-utils";
import {observer} from "mobx-react";

export const CardsCollection = observer(()=>{
    const {collectionStore:{collection}} = useStores()

    return(
        <div className={styles.cardsContainer}>
            {collection.map((film) =><Link to = {"/main/"+film.id} className="regLink"><Card id={film.id} title={film.title} rate={film.rate} posterImgUrl={film.posterImgUrl}/></Link>)}
        </div>
    )
})