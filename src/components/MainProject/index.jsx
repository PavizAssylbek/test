import React from 'react'
import Link from 'next/link'
import SmallProject from '../SmallProject'
import styles from './styles.module.scss'
import SwiperCore, { Navigation } from 'swiper';
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation]);

export default function MainProject() {
  return (
    <div className={clsx(styles.main_project)}>
      <div className={clsx(styles.main_project_head, 'container')}>
        <h2>Проекты</h2>
        <div className={styles.main_project_sort}>
          <Link href={'/project'}>
              <a>
                Kazakh Tourism
              </a>
            </Link>
            <Link href={'/'}>
              <a>
                Travel-дайджесты
              </a>
            </Link>
            <Link href={'/project/extrim'}>
              <a>
                Мнения экспертов
              </a>
            </Link>
        </div>
        <Link href="/project">
          <a className={styles.main_project_link}><span>Все публикации</span> <img src="/front.png" alt="back"/></a>
        </Link>
      </div>
      <Swiper
        className={styles.main_project_grid}
        spaceBetween={35}
        slidesPerView='auto'
        navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
      >
      {Array(6)
          .fill(0)
          .map((_,i) => (
            <SwiperSlide className={styles.main_project_slide} key={i}>
              <SmallProject id={i} />
            </SwiperSlide>
          ))
        }
        <div className="container">
        <div className={styles.main_project_buttons}>
            <div className={clsx(styles.main_project_prev, "swiper-button-prev")}>
              <svg height="30" viewBox="0 0 90 30"  fill="none">
                <path d="M1 7.99997L89 7" stroke="#1AB7E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 15L1 8L8 1" stroke="#1AB7E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={clsx(styles.main_project_next,"swiper-button-next")}>
            <svg height="30" viewBox="0 0 90 30" fill="none">
              <path d="M1 7.99997L89 7" stroke="#1AB7E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M82 0.999969L89 7.99997L82 15" stroke="#1AB7E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  )
}