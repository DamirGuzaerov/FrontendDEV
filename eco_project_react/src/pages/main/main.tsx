import React from "react";
import Header from "../../components/header/header";
import BannerSwiper from "../../components/swiper/bannerSwiper";
import {inspect} from "util";
import styles from "./main.module.sass";
import NavCard from "../../components/navCard/navigationCard";

function Main() {
    return (
        <div>
            <Header/>
            <div className={styles.mainCards__wrapper}>
                <BannerSwiper/>
                <div className={styles.navCards}>
                    <NavCard text={"Посмотри, где в твоем городе \n можно сдать вторсырье \n на переработку"} title={"Пункты сбора"}/>
                    <NavCard text={"Используй заработанные \n экокоины для покупки товаров \n из переработанных материалов "} title={"ЭкоМаркет"}/>
                </div>
            </div>
        </div>
    );
}

export default Main;

