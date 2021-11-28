import './main.module.sass';
import {observer} from "mobx-react";
import {useStores} from "../../utils/stores-utils";
import {Header} from "../../components/Header/header";
import {Card} from "../../components/card/card";
import styles from "./main.module.sass";
import {SwitchButton} from "../../components/switchButtons/switchButton";

export const Main = observer(() => {
    const {collectionStore:{collection}} = useStores()
    let iterator=0;
    return(
        <>
            <Header />
            <div className={styles.mainContainer}>
                <div className="main">
                    <div className={styles.mainTitle}>Коллекция</div>
                    <div className={styles.switchBtns}>
                        <SwitchButton/>
                        <img className="listIcon" src="" alt=""/>
                    </div>
                    <div className={styles.cardsContainer}>
                        {collection.map((film) =><Card title={film.title} rate={film.rate} posterImgUrl={film.posterImgUrl}/>,iterator++)}
                    </div>
                </div>
            </div>
        </>
        )
})