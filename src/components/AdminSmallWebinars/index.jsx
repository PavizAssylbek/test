import clsx from 'clsx'
import React from 'react'

import styles from './styles.module.scss'


export default function AdminSmallWebinars() {

  return (
    <div className={clsx(styles.webinar, 'border-radius')}>
      <div className={styles.webinar_head}>
        <div className="">
          <img src="/calendar2.svg" alt="#"/>
          <span>21.09.2020</span>
        </div>
        <div className="">
          <img src="/clock.svg" alt="#"/>
          <span>12:00</span>
        </div>
      </div>
      <div className={styles.webinar_body}>
        <button><img src="/edit.svg" alt="#"/></button>
        <button><img src="/trash.svg" alt="#"/></button>
      </div>
      <div className={styles.webinar_text}>
        <h6>Семейный отдых в стиле Blue Diamond</h6>
      </div>
    </div>
  )

}