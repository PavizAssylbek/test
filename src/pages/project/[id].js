import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../../components/MainLayout'
import { Swiper, SwiperSlide } from 'swiper/react';
import SmallProject from '../../components/SmallProject'

import clsx from 'clsx'
import styles from './styles.module.scss'

export default function insideProject() {
  return (
    <MainLayout>
      <Head>
        <title>Tourism: Project</title>
      </Head>
      <div className={clsx(styles.project, 'container')}>
        <div className={styles.project_head}>
          <h2>Проекты</h2>
          <Link href="/project">
            <a className={styles.project_link}><span>Назад</span> <img src="/back.png" alt="back"/></a>
          </Link>
        </div>
        <div className={styles.project_content}>
          <div className={styles.project_left}>
            <img className="border-radius" src="/port.png" alt="#"/>
            <h3 className={styles.project_left_title}>Анти-Валентин — топ-5 мест, где можно излечиться от любви</h3>
            <span className={styles.project_left_data}>21.09.2020</span>
            <div className={styles.project_flex}>
              <p className={styles.project_view}>
                <img src="/eye2.svg" alt="#"/>
                222
              </p>
              <div className={styles.project_socialnetwork}>
                <img src="/logo-vk.svg" alt="#"/>
                <img src="/logo-twitter.svg" alt="#"/>
                <img src="/logo-facebook.svg" alt="#"/>
                <img src="/logo-instagram.svg" alt="#"/>
              </div>
            </div>
            <div className={styles.project_anytext}>
              <p>
                <b>
                Анти-Валентин — топ-5 мест, где можно излечиться от любви — яркие идеи путешествий от «Тонкостей туризма». Лучший отдых начинается именно здесь, на «Тонкостях».
                </b>
              </p>
              <p>
                Откроем-ка мы дайджест накануне Дня Святого Валентина следующим советом классика русской литературы: «Если ты влюблен, то возьми: полфунта александрийского листа, штоф водки, ложку скипидару, четверть фунта семибратней крови и полфунта жжёных „Петербургских ведомостей“, смешай всё это и употреби в один прием. Причинённая этим средством болезнь заставит тебя выехать из дачи в город за врачебною помощью и тебе будет не до любви».
              </p>
              <h6>
                Улиться слезами
              </h6>
              <p>
                Музыка разожжёт любовь, музыка же скрасит и разлуку — главное правильно подобрать жанр. Если в первом случае выбор за вами — кто-то млеет от Иглесиаса-старшего или младшего, кто-то — от ветеранов рока; во втором имеет смысл довериться португальцам. Из граждан империи, владевшей половиной мира, они превратились в жителей не самой популярной страны на крайнем западе Европы, так что толк в утратах в Португалии понимают.
              </p>
              <Swiper 
                slidesPerView='auto'
                spaceBetween={35}>
                {Array(6)
                  .fill(0)
                  .map((_,i) => (
                    <SwiperSlide className={styles.project_slider}  key={i}>
                      <img className="border-radius" src="/port.png" alt="#"/>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
              <h6>
                Мрачные тени
              </h6>
              <p>
                Если плакать уже не хочется, но к веселью вы пока морально не готовы, примерьте на себя образ Чайльд Гарольда: отстранённое отношение к окружающей действительности, погружённость в свои мысли и лёгкое пренебрежение мирскими заботами. Предаться возвышенной печали лучше всего в Швеции с её средневековыми замками, промозглым климатом и общей атмосферой негостеприимного севера.
              </p>
              <h6>
                Философия одиночества
              </h6>
              <p>
                Кто придумал все эти слащавые истории про вторую половинку и разделённых кентавров, явно был унылым нытиком, ничего не понимающим в прелестях одиночного плаванья. Чтобы вновь насладиться изрядно забытым в отношениях ощущениям полной предоставленности самому себе — без телефонных звонков с вопросами «где ты?» и бонтонных посещений родителей на уикенд (когда так хочется поваляться в постели) — обратите внимание на Мадагаскар. 
              </p>
              <Swiper 
                slidesPerView='auto'
                spaceBetween={35}>
                {Array(6)
                  .fill(0)
                  .map((_,i) => (
                    <SwiperSlide className={styles.project_slider}  key={i}>
                      <img className="border-radius" src="/animal.png" alt="#"/>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>

          </div>
          <div className={styles.project_right}>
            {
              Array(5)
              .fill(0)
              .map((_,i) => (
                <SmallProject id={i} key={i} />
              ))
            }
          </div>
        </div>
      </div>
    </MainLayout>
  )
}