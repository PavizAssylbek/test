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
          <a className={styles.mainwebinars_link}><span>Все вебинары</span> <img src="/front.png" alt="back"/></a>
        </Link>
      </div>
      <div className={styles.mainwebinars_content}>
        <SmallWebinars finish={false} id={1} />
        <SmallWebinars finish={true} id={2} />
        <SmallWebinars finish={true} id={3} />
        <SmallWebinars finish={true} id={4} />
        <SmallWebinars finish={true} id={5} />
      </div>
    </div>
  )


}