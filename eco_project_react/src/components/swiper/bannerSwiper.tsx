import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css'
import Banner from "../banner/banner";
import {inspect} from "util";
import styles from "./bannerSwiper.module.sass"

function BannerSwiper() {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className={styles.customSwiper}
        >
            <SwiperSlide>
                <Banner
                    title="Сделаем мир чище"
                    text={'Сдай макулатуру или старую одежду и получи скидку \n на покупку товаров из переработанных материалов'}/>
            </SwiperSlide>

            <SwiperSlide>
                <Banner
                    title="А вы знали..."
                    text={"что среднее время разложения пластмассовых изделий колеблется \n от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет? "}/>
            </SwiperSlide>

            <SwiperSlide>
                <Banner
                    title="Что с масками?"
                    text={"Медицинские маски не обязательно должны становиться отходами. \n Их тоже можно сдать на переработку."}/>
            </SwiperSlide>

        </Swiper>
    );
}

export default BannerSwiper;

