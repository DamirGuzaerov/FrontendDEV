import './main.sass';
import {observer} from "mobx-react";
import {useStores} from "../../utils/stores-utils";
import {Header} from "../../components/Header/header";
import {Card} from "../../components/card/card";

export const Main = observer(() => {
    const {collectionStore:{collection}} = useStores()
    return(
        <>
            <Header />
            <div className="mainContainer">
                <div className="main">
                    <div className="mainTitle">Коллекция</div>
                    <div className="switchBtns">
                        <button>Буду смотреть</button>
                        <button>Просмотрено</button>
                        <img className="listIcon" src="" alt=""/>
                    </div>
                    <div className="cardsContainer">
                        {collection.map(film => <Card title={film.title} rate={film.rate} posterImgUrl={film.posterImgUrl}/>)}
                    </div>
                </div>
            </div>
        </>
        )
})