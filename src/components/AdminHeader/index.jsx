import React from 'react'
import { Link } from '../../../i18n'
import styles from './styles.module.scss'


function AdminHeader() {


  return (
  <header className={styles.header}>
    <div className="container">
      <nav className={styles.header_content}>
        <Link href="/">
          <a className={styles.header_bold}>
            <img src="/h_logo.svg" alt="#"/>
          </a>
        </Link>

        <div className="">
          <img src="/bell.svg" alt="#"/>
        </div>
        <div className={styles.header_bold}>
          Киценко Артём 
          <img src="/adminUser.svg" alt="user" style={{marginLeft: '20px'}} />
        </div>
      </nav>
    </div>
  </header>
  )

}

export default AdminHeader