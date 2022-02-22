import React from "react";
import Header from "../../components/header/header";
import BannerSwiper from "../../components/swiper/bannerSwiper";
import styles from "./main.module.sass";
import NavCard from "../../components/navCard/navigationCard";
import Footer from "../../components/footer/footer";
import navFirstImg from "../../assets/images/mapImg.png"
import navSecondImg from "../../assets/images/Illustration.png"

function Main() {
    return (
        <div className={styles.mainPage}>
            <Header/>
            <div className={styles.mainCards__wrapper}>
                <BannerSwiper/>
                <div className={styles.navCards}>
                    <NavCard text={"Посмотри, где в твоем городе\n можно сдать вторсырьё \n на переработку"}
                             title={"Пункты сбора"}
                             bgImg={navFirstImg}
                    />
                    <NavCard text={"Используй заработанные \n экокоины для покупки товаров \n из переработанных материалов "}
                             title={"ЭкоМаркет"}
                             bgImg={navSecondImg}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Main;

