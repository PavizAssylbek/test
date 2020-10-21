import React from 'react'
import { Link } from '../../../i18n'
import SmallProject from '../SmallProject'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { useRouter } from 'next/router'

export default function ProjectContent() {

  const router = useRouter()

  return (
    <div className={clsx(styles.project_content, 'container')}>
      <div className={styles.project_content_head}>
        <h2>Проекты</h2>
        <div className={styles.project_content_sort}>
          <Link href={'/project'}>
            <a className={router.pathname == '/project' ? styles.project_content_active : ''}>
              Kazakh Tourism
            </a>
          </Link>
          <Link href={'/'}>
            <a className={router.pathname == '/' ? styles.project_content_active : ''}>
              Travel-дайджесты
            </a>
          </Link>
          <Link href={'/project/extrim'}>
            <a className={router.pathname == '/project/extrim' ? styles.project_content_active : ''}>
              Мнения экспертов
            </a>
          </Link>
        </div>
        <Link href="/">
          <a className={styles.project_content_link}><span>Назад</span> <img src="/back.png" alt="back"/></a>
        </Link>
      </div>
      <div className={styles.project_content_grid}>
      {Array(4)
          .fill(0)
          .map((_,i) => (
            <SmallProject id={i} key={i} />
          ))
        }
      </div>
    </div>
  )
}