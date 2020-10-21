import React from 'react'
import AdminSidebar from '../AdminSidebar'
import AdminHeader from '../AdminHeader'
import { Link } from '../../../i18n'


import styles from './styles.module.scss'
import clsx from 'clsx'


export default function AdminLayout({children}) {
  return (
    <div className={clsx(styles.layout, 'home')}>

      <main className="flex">
        <AdminSidebar />
        <div className="content">
          <AdminHeader />

          {children}



          <footer>
            <div className="container">
              <div className={styles.layout_content}>
                <Link href="/">
                  <a className={styles.layout_link}>Панель управления</a>
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
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}