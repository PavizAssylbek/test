import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

import styles from './styles.module.scss'
import clsx from 'clsx'

function Sidebar() {
  const router = useRouter()
  
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_content}>
        <Link href="/">
          <a className={clsx(styles.sidebar_link, router.pathname == '/' ? styles.active : '')}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12L16 2.66666L28 12V26.6667C28 27.3739 27.719 28.0522 27.219 28.5523C26.7189 29.0524 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0524 4.78105 28.5523C4.28095 28.0522 4 27.3739 4 26.6667V12Z" stroke="white" strokeWidth="2"strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 29.3333V16H20V29.3333" stroke="white" strokeWidth="2"strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </Link>
        <Link href="/news">
          <a className={clsx(styles.sidebar_link, router.pathname == '/news' ? styles.active : '')}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </a>
        </Link>
        <Link href="/project">
          <a className={clsx(styles.sidebar_link, router.pathname == '/project' ? styles.active : '')}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.6666 2.66666H7.99998C7.29274 2.66666 6.61446 2.94761 6.11436 3.4477C5.61426 3.9478 5.33331 4.62608 5.33331 5.33332V26.6667C5.33331 27.3739 5.61426 28.0522 6.11436 28.5523C6.61446 29.0524 7.29274 29.3333 7.99998 29.3333H24C24.7072 29.3333 25.3855 29.0524 25.8856 28.5523C26.3857 28.0522 26.6666 27.3739 26.6666 26.6667V10.6667L18.6666 2.66666Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.6667 2.66666V10.6667H26.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3334 17.3333H10.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.3334 22.6667H10.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3334 12H12H10.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </a>
        </Link>
        <Link href="/webinars">
          <a className={clsx(styles.sidebar_link, router.pathname == '/webinars' ? styles.active : '')}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 29.3333C23.3638 29.3333 29.3334 23.3638 29.3334 16C29.3334 8.63621 23.3638 2.66667 16 2.66667C8.63622 2.66667 2.66669 8.63621 2.66669 16C2.66669 23.3638 8.63622 29.3333 16 29.3333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3333 10.6667L21.3333 16L13.3333 21.3333V10.6667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </a>
        </Link>
        <Link href="/">
          <a className={clsx(styles.sidebar_link)}>
          <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25.5" cy="25.5" r="25.5" fill="white"/>
            <path d="M35.6666 38V35.3333C35.6666 33.9188 35.1047 32.5623 34.1045 31.5621C33.1044 30.5619 31.7478 30 30.3333 30H19.6666C18.2522 30 16.8956 30.5619 15.8954 31.5621C14.8952 32.5623 14.3333 33.9188 14.3333 35.3333V38" stroke="#1AB7E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M25 24.6667C27.9455 24.6667 30.3334 22.2789 30.3334 19.3333C30.3334 16.3878 27.9455 14 25 14C22.0545 14 19.6667 16.3878 19.6667 19.3333C19.6667 22.2789 22.0545 24.6667 25 24.6667Z" stroke="#1AB7E2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </a>
        </Link>
      </div>
    </div> 
  )

}

export default Sidebar