import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function SmallWebinars({finish, id}) {

  return (
    <Link href={`/webinars/${id}`}>
      <a className={clsx(styles.smallwebinars, 'border-radius')}>
      <img className={styles.smallwebinars_img} src="/people.png" alt="#"/>
      <div className={styles.smallwebinars_content}>
        <div>
          <img src="/calendar2.svg" alt="svg"/>
          <span>21.09.2020</span>
        </div>
        <div>
          <img src="/clock.svg" alt="svg"/>
          <span>12:00</span>
        </div>
        <img src="/playcircle.svg" alt="svg"/>
      </div>
      <div>
        {finish && (
          <p className={styles.smallwebinars_finish}><img src="/finish.svg" alt="#"/> Закончился</p>
        )}
        <p className={styles.smallwebinars_text}>Семейный отдых в стиле Blue Diamond</p>
      </div>
    </a>
    </Link>
  )


}