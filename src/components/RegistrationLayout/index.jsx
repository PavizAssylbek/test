import React from 'react'
import { Link } from '../../../i18n'

import styles from './styles.module.scss'


export default function RegistrationLayout({children}) {
  return (
    <div className={styles.layout}>
      <div className="container">
        <div className={styles.layout_content}>
          <Link href="/">
            <a className={styles.layout_img}><img src="/h_logo.svg" alt="#"/></a>
          </Link>

          <main>
            {children}
          </main>

          <footer>
            <Link href="/">
              <a className={styles.layout_link}>Главная</a>
            </Link>
            <Link href="/news">
              <a className={styles.layout_link}>Новости</a>
            </Link>
            <Link href="/project">
              <a className={styles.layout_link}>Проекты </a>
            </Link>
            <Link href="/webinars">
              <a className={styles.layout_link}>Вебинары </a>
            </Link>
          </footer>
        </div>
      </div>
    </div>
    
  )
}