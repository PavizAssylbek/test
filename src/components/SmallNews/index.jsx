import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function SmallNews({id}) {

  return (
    <Link href={`/news/${id}`}>
      <a className={styles.smallnews}>
      <img className={clsx(styles.smallnews__img, 'border-radius')} src="/almaty.png" alt="#"/>
      <div className={styles.smallnews_content}>
        <div className="flex">
          <img src="/eye.svg" alt="#"/>
          <span className={styles.smallnews_view}>222</span>
        </div>
        <p className={styles.smallnews_text}>Более 20 новых туробъектов появятся в Алматинской области до конца года</p>
        <span className={styles.smallnews_data}>21.09.2020</span>
      </div>
    </a>
    </Link>
  )


}