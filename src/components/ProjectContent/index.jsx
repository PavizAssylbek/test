import React from 'react'
import Link from 'next/link'
import SmallProject from '../SmallProject'
import styles from './styles.module.scss'
import clsx from 'clsx'

export default function ProjectContent() {
  return (
    <div className={clsx(styles.project_content, 'container')}>
      <div className={styles.project_content_head}>
        <h2>Проекты</h2>
        <div className={styles.project_content_sort}>
          <span className={styles.project_content_active}>Kazakh Tourism</span>
          <span>Travel-дайджесты</span>
          <span>Мнения экспертов</span>
        </div>
        <Link href="/">
          <a className={styles.project_content_link}>Назад <img src="/back.png" alt="back"/></a>
        </Link>
      </div>
      <div className={styles.project_content_grid}>
      {Array(4)
          .fill(0)
          .map((_,i) => (
            <SmallProject key={i} />
          ))
        }
      </div>
    </div>
  )
}