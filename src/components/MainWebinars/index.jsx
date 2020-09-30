import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'
import SmallWebinars from '../SmallWebinars'

export default function MainWebinars() {


  return (
    <div className={clsx(styles.mainwebinars, 'container')}>
      <div className={styles.mainwebinars_head}>
        <h2>Вебинары</h2>
        <Link href="/webinars">
          <a className={styles.mainwebinars_link}>Все вебинары <img src="/front.png" alt="back"/></a>
        </Link>
      </div>
      <div className={styles.mainwebinars_content}>
        <SmallWebinars finish={false} />
        <SmallWebinars finish={true} />
        <SmallWebinars finish={true} />
        <SmallWebinars finish={true} />
        <SmallWebinars finish={true} />
        <SmallWebinars finish={true} />
      </div>
    </div>
  )


}