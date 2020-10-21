import React from 'react'
import { Link } from '../../../i18n'
import { Cookies } from 'react-cookie';

import styles from './styles.module.scss'
import clsx from 'clsx'

const cookies = new Cookies();

export default function AdminNewsComponent({title, smalltitle, link = "/admin", bool, data}) {
console.log("AdminNewsComponent -> data", data)

  async function deletedContent(id) {
    const token = cookies.get('token')
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    const myHeaders = new Headers();

    myHeaders.append("Authorization", `Bearer ${token}`)

    const requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirected: true
    };

    const res = await fetch(`${BASE_URL}/api/news/${id}`, requestOptions)

  }

  return (
    <div className={clsx(styles.news)}>
      <div className={styles.news_head}>
        <h6>{title}</h6>
        <Link href={`admin/${data.data[0].link}/new`}>
          <a className={styles.news_btn}>
            <button>
              <img src="/plus-circle.svg" alt="svg"/>
            Добавить новую {smalltitle}
          </button>
          </a>
        </Link>
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
          {
            data.data.map((el,id) => (
              <div className={styles.news_content_body} key={id}>
                <p>{el.heading_ru}</p>
                <span>{el.date}</span>
                {
                  el.status.id === 1 
                  ?(<span className={styles.news_blue}>{el.status.name_ru}</span>)
                  :(<span className={styles.news_green}>{el.status.name_ru}</span>)
                }
                <div className={styles.news_content_btns}>
                  <Link href={`/admin/${el.link}/${el.id}`}>
                    <a>
                      <button className={styles.news_blue}>Редактирование</button>
                    </a>
                  </Link>
                  <a>
                    <button onClick={() => deletedContent(el.id)} className={styles.news_red}>Удалить</button>
                  </a>
                </div>
              </div>
            ))
          }
        </div>
        <div className={styles.news_pagination}>
          <p>Показано страниц 1-3 из 5 таблиц</p>
        </div>
      </div>
    </div>
  )


}