import React from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'
import clsx from 'clsx'

export default function AdminNewsComponent({title, smalltitle, link = "/admin", bool}) {


  return (
    <div className={clsx(styles.news)}>
      <div className={styles.news_head}>
        <h6>{title}</h6>
        <button>
          <img src="/plus-circle.svg" alt="svg"/>
          Добавить новую {smalltitle}
        </button>
        <Link href={link}>
          {bool === true 
            ? <a className={styles.news_link}>Все <img src="/chevron-left.svg" alt="#"/></a>
            : <a className={styles.news_link}><img src="/chevron-right.svg" alt="#"/> Назад</a>
          }
        </Link>
      </div>
      <div className={clsx(styles.news_wrapper, 'border-radius')}>
        <div className={clsx(styles.news_content, 'border-radius')}>
          <div className={styles.news_content_head}>
            <h6>Заголовок новостей</h6>
            <h6>Дата опубликования</h6>
            <h6>Статус</h6>
            <h6>Действия</h6>
          </div>
          <div className={styles.news_content_body}>
            <p>Главе государства презентовали в Туркестане туристический визит-центр</p>
            <span>22.09.2020</span>
            <span className={styles.news_green}>Опубликован</span>
            <div className={styles.news_content_btns}>
              <button>Редактировать</button>
              <button>Удалить</button>
            </div>
          </div>
          <div className={styles.news_content_body}>
            <p>Главе государства презентовали в Туркестане туристический визит-центр</p>
            <span>22.09.2020</span>
            <span className={styles.news_blue}>Не опубликован</span>
            <div className={styles.news_content_btns}>
              <button>Редактировать</button>
              <button>Удалить</button>
            </div>
          </div>
        </div>
        <div className={styles.news_pagination}>
          <p>Показано страниц 1-3 из 5 таблиц</p>
        </div>
      </div>
    </div>
  )


}