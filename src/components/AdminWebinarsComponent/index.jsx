import React from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'
import clsx from 'clsx'
import AdminSmallWebinars from '../AdminSmallWebinars'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation]);

export default function AdminWebinarsComponent({title, link = "/admin", bool}) {

 


  return (
    <div className={clsx(styles.webinar)}>
      <div className={styles.webinar_head}>
        <h6>{title}</h6>
        <button>
          <img src="/plus-circle.svg" alt="svg"/>
          Создать вебинар
        </button>
        <Link href={link}>
          {bool === true 
            ? <a className={styles.webinar_link}>Все <img src="/chevron-left.svg" alt="#"/></a>
            : <a className={styles.webinar_link}><img src="/chevron-right.svg" alt="#"/> Назад</a>
          }
        </Link>
      </div>
      <Swiper
        spaceBetween={35}
        slidesPerView={3}
        navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
      >
      {Array(6)
          .fill(0)
          .map((_,i) => (
            <SwiperSlide className={styles.webinar_slide} key={i}>
              <AdminSmallWebinars id={i} />
            </SwiperSlide>
          ))
        }
        <div className="container">
        <div className={styles.webinar_buttons}>
            <div className={clsx(styles.webinar_prev, "swiper-button-prev")}>
              <svg height="30" viewBox="0 0 90 30"  fill="none">
                <path d="M1 7.99997L89 7" stroke="#1AB7E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 15L1 8L8 1" stroke="#1AB7E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={clsx(styles.webinar_next,"swiper-button-next")}>
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