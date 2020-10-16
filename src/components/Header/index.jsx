import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from './styles.module.scss'
import clsx from 'clsx'

import { withTranslation, i18n } from '../../../i18n'


function Header({t}) {

  const router = useRouter()
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);
  const langRef = React.useRef()

  const allLang = ['ru', 'kz']
  const activeLang = allLang[activeItem]
  
  const changeLang = () => {
    i18n.changeLanguage(activeLang);
  }
  

  const toggleVisible = () => {
    setVisiblePopup(!visiblePopup)
  }

  const handleOutsideClick = e => {
    if(!e.path.includes(langRef.current)) {
      setVisiblePopup(false)
    }
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
    return () => {
      document.body.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  const onSelectItem = id => {
    setActiveItem(id)
    setVisiblePopup(false)
  }


  return (
  <header className={styles.header}>
    <div className="container">
      <nav className={styles.header_content}>
        <Link href="/">
          <a className={styles.header_bold}>
            <img src="/h_logo.svg" alt="#"/>
          </a>
        </Link>
        <Link href="/">
          <a className={router.pathname == '/' ? styles.active : ''}>{t('main')}</a>
        </Link>
        <Link href="/news">
          <a className={router.pathname == '/news' ? styles.active : ''}>Новости</a>
        </Link>
        <Link href="/project">
          <a className={router.pathname == '/project' ? styles.active : ''}>Проекты</a>
        </Link>
        <Link href="/webinars">
          <a className={router.pathname == '/webinars' ? styles.active : ''}>Вебинары</a>
        </Link>
        <Link href="/login">
          <a className={styles.header_bold}>Войти <img src="/login.svg" alt="login" /></a>
        </Link>
        <div ref={langRef} className={styles.header_lang}>
          <span onClick={toggleVisible}>{activeLang} <img src="/dd.svg" alt="#"/></span>
          {visiblePopup && (
            <ul className={clsx(styles.header_langs, 'border-radius')}>
              {allLang &&
                allLang.map((name, index) => (
                  <li
                    onClick={() => activeItem !== index ? onSelectItem(index) : '', changeLang}
                    className={clsx(activeItem === index ? styles.active : '')}
                    key={index}>
                    {name}
                  </li>
                ))
              }
            </ul>
          )}
        </div>
        <Link href="/regis">
          <a className={clsx(styles.registration, 'border-radius')}>Регистрации</a>
        </Link>
      </nav>
    </div>
  </header>
  )

}


export default withTranslation('header')(Header)
