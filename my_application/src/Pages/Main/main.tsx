import './main.module.sass';
import {observer} from "mobx-react";
import {useStores} from "../../utils/stores-utils";
import {Header} from "../../components/Header/header";
import {Card} from "../../components/card/card";
import styles from "./main.module.sass";
import {SwitchButton} from "../../components/switchButtons/switchButton";
import list_icon from "../../assets/img/Icon_List.png";
import {Link} from "react-router-dom";

export const Main = observer(() => {
    const {collectionStore:{collection}} = useStores()
    return(
        <>
            <Header />
            <div className={styles.mainContainer}>
                <div className="main">
                    <div className={styles.mainTitle}>Коллекция</div>
                    <div className={styles.switchButtonContainer}>
                        <SwitchButton/>
                        <img className={styles.listIcon} src={list_icon} alt=""/>
                    </div>
                    <div className={styles.cardsContainer}>
                        {collection.map((film) =><Link to = {"/Main/"+film.id} className="regLink"><Card id={film.id} title={film.title} rate={film.rate} posterImgUrl={film.posterImgUrl}/></Link>)}
                    </div>
                </div>
            </div>
        </>
        )
})