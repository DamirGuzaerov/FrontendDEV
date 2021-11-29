import {observer} from "mobx-react";
import {useStores} from "../../utils/stores-utils";
import {Header} from "../../components/Header/header";
import styles from "../CardPage/cardPage.module.sass";
import {useParams} from "react-router";
import {FullCard} from "../../components/CardFull/fullCard";

export const CardPage = observer(() => {
    const {collectionStore:{collection}} = useStores()
    const params = useParams();

    function GetCardById(id?:string) {
       return collection.find((card)=>card.id?.toString()===id)
    }

    const currentCard = GetCardById(params.id);
    return(
        <>
            <Header />
                    <div className={styles.cardsContainer}>
                        <FullCard posterImgUrl={currentCard?.posterImgUrl} title={currentCard?.title} rate={currentCard?.rate} description={currentCard?.description} genre={currentCard?.genre}/>
                    </div>
        </>
    )
})