import React from 'react'
import styles from './styles.module.scss'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainSliderItem from "./Item";
import clsx from 'clsx';
import EarthSVG from '../EarthSVG';

SwiperCore.use([Navigation]);

const MainSlider = () => {
  return (
    <section className={clsx(styles.main_slider, 'container')}>

      <h1>
      <b>Туристическая</b><br/>
      экосистема
      </h1>
      <EarthSVG />
      <div className={styles.main_slider_wrapper}>
        <Swiper
          speed={1000}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide className={styles.main_slider_flex}>
            <MainSliderItem 
              images={<img src='/slide1.png' alt='slide1' />} 
              text="Объединяет участников единой коммуникационной платформой"
            />
            <MainSliderItem 
              images={<img src='/slide2.png' alt='slide2' />} 
              text="Формирует лучший клиентский опыт"
            />
          </SwiperSlide>

          <SwiperSlide className={styles.main_slider_flex}>
            <MainSliderItem 
              images={<img src='/slide1.png' alt='slide1' />} 
              text="Объединяет участников единой коммуникационной платформой"
              bg="#1AB7E2;"
            />
            <MainSliderItem 
              images={<img src='/slide2.png' alt='slide2' />} 
              text="Формирует лучший клиентский опыт"
              bg="#2FCFD7;"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default MainSlider
