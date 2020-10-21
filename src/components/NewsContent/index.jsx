import React from 'react'
import { Link } from '../../../i18n'
import SmallNews from '../SmallNews'
import styles from './styles.module.scss'
import clsx from 'clsx'

export default function NewsContent() {
  return (
    <div className={clsx(styles.newscontent, 'container')}>
      <div className={styles.newscontent_head}>
        <h2>Новости туристической отрасли</h2>
        <Link href="/">
          <a className={styles.newscontent_link}><span>Назад</span> <img src="/back.png" alt="back"/></a>
        </Link>
      </div>
      <div className={styles.newscontent_grid}>
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