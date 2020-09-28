import clsx from 'clsx'
import React from 'react'
import styles from './styles.module.scss'

export default function SmallNews() {

  return (
    <div className={styles.smallnews}>
      <img className={clsx(styles.smallnews__img, 'border-radius')} src="/boa.png" alt="#"/>
      <div className={styles.smallnews_content}>
        <div className="flex">
          <img src="/eye.svg" alt="#"/>
          <span className={styles.smallnews_view}>222</span>
        </div>
        <p className={styles.smallnews_text}>Анти-Валентин — топ-5 мест, где можно излечиться от любви</p>
      </div>
    </div>
  )


}