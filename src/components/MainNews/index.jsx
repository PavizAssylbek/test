import React from 'react'
import Link from 'next/link'
import SmallNews from '../SmallNews'
import styles from './styles.module.scss'
import clsx from 'clsx'

export default function MainNews() {
  return (
    <div className={clsx(styles.main_news, 'container')}>
      <div className={styles.main_news_head}>
        <h2>Новости туристической отрасли</h2>
        <Link href="/news">
          <a className={styles.main_news_link}><span>Все новости</span> <img src="/front.png" alt="back"/></a>
        </Link>
      </div>
      <div className={styles.main_news_grid}>
        {Array(4)
          .fill(0)
          .map((_,i) => (
            <SmallNews id={i} key={i} />
          ))
        }
      </div>
    </div>
  )
}