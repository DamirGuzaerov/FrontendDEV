import {observer} from "mobx-react";
import {useStores} from "../../utils/stores-utils";
import {Header} from "../../components/header/header";
import styles from ".//cardPage.module.sass";
import {useParams} from "react-router";
import {FullCard} from "../../components/cardFull/fullCard";
import collectionStore from "../../stores/collectionStore";
import {get} from "mobx";

export const CardPage = observer(() => {
    const {collectionStore:{GetCardById,collection}} = useStores()
    const params = useParams();

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