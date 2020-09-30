import React from 'react'
import styles from './styles.module.scss'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import MainSliderItem from "./Item";
import clsx from 'clsx';

SwiperCore.use([Navigation]);

const MainSlider = () => {
  return (
    <section className={clsx(styles.main_slider, 'container')}>

      <h1>
      <b>Туристическая</b><br/>
      экосистема
      </h1>
      <img className={styles.main_slider_img} src="/main.png" alt=""/>
      <div className={styles.main_slider_wrapper}>
        <Swiper
          speed={1000}
          slidesPerView={1}
          navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
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
          <div className={styles.main_slider_buttons}>
            <div className={clsx(styles.main_slider_prev, "swiper-button-prev")}>
              <svg height="30" viewBox="0 0 90 30"  fill="none">
                <path d="M1 7.99997L89 7" stroke="#1AB7E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 15L1 8L8 1" stroke="#1AB7E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={clsx(styles.main_slider_next,"swiper-button-next")}>
            <svg height="30" viewBox="0 0 90 30" fill="none">
              <path d="M1 7.99997L89 7" stroke="#1AB7E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M82 0.999969L89 7.99997L82 15" stroke="#1AB7E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default MainSlider
