import React from "react";
import Header from "../../components/header/header";
import BannerSwiper from "../../components/swiper/bannerSwiper";
import {inspect} from "util";
import styles from "./main.module.sass";

function Main() {
    return (
        <div>
            <Header/>
            <BannerSwiper/>
        </div>
    );
}

export default Main;

