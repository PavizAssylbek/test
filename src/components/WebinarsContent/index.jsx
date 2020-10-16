import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'
import clsx from 'clsx'
import SmallWebinars from '../SmallWebinars'

export default function WebinarsContent() {


  return (
    <div className={clsx(styles.webinars_content, 'container')}>
      <div className={styles.webinars_content_head}>
        <div className={styles.webinars_content_flex}>
          <h2>Вебинары</h2>
          <div className={styles.webinars_content_calendar}>
            <img src="/calendar.svg" alt=""/>
            <span>выбрать дату</span>
          </div>
        </div>
        <Link href="/">
          <a className={styles.webinars_content_link}><span>Назад</span> <img src="/back.png" alt="back"/></a>
        </Link>
      </div>
      <div className={styles.webinars_content_grid}>
        <SmallWebinars finish={false} id={1} />
        <SmallWebinars finish={true} id={2} />
        <SmallWebinars finish={true} id={3} />
        <SmallWebinars finish={true} id={4} />
        <SmallWebinars finish={true} id={5} />
      </div>
    </div>
  )


}