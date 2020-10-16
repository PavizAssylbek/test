import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import SmallExtrim from '../../../components/SmallExtrim'
import MainLayout from '../../../components/MainLayout'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { useRouter } from 'next/router'

export default function expertOpinion() {


  const router = useRouter()


  return (
    <MainLayout>

      <Head>
        <title>Tourism: Project</title>
      </Head>

      <div className="flex">
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
          {Array(8)
              .fill(0)
              .map((_,i) => (
                <SmallExtrim id={i} key={i} smallIMG={false} />
              ))
            }
          </div>
        </div>
      </div>
      
    </MainLayout>
  )
}