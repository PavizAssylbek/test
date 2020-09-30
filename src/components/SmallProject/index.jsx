import clsx from 'clsx'
import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

export default function SmallProject({id}) {

  return (
    <Link href={`/project/${id}`}>
      <a className={styles.smallproject}>
      <img className={clsx(styles.smallproject__img, 'border-radius')} src="/boa.png" alt="#"/>
      <div className={styles.smallproject_content}>
        <div className="flex">
          <img src="/eye.svg" alt="#"/>
          <span className={styles.smallproject_view}>222</span>
        </div>
        <p className={styles.smallproject_text}>Анти-Валентин — топ-5 мест, где можно излечиться от любви</p>
      </div>
    </a>
    </Link>
  )


}