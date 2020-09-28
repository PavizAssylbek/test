import React from 'react'
import Link from 'next/link'
import SmallProject from '../SmallProject'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react';

export default function MainProject() {
  return (
    <div className={clsx(styles.main_project, 'container')}>
      <div className={styles.main_project_head}>
        <h2>Проекты</h2>
        <div className={styles.main_project_sort}>
          <span className={styles.main_project_active}>Kazakh Tourism</span>
          <span>Travel-дайджесты</span>
          <span>Мнения экспертов</span>
        </div>
        <Link href="/project">
          <a className={styles.main_project_link}>Все публикации <img src="/front.png" alt="back"/></a>
        </Link>
      </div>
      <div >
      <Swiper
        className={styles.main_project_grid}
        spaceBetween={40}
        slidesPerView={3.3}
      >
      {Array(10)
          .fill(0)
          .map((_,i) => (
            <SwiperSlide key={i}>
              <SmallProject />
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </div>
  )
}