import React from 'react'
import { Link } from '../../../i18n'
import {useRouter} from 'next/router'
import { I18nContext } from 'next-i18next'
import { withTranslation, i18n } from '../../../i18n'

import styles from './styles.module.scss'
import clsx from 'clsx'


function Header({t}) {

  const router = useRouter()
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const langRef = React.useRef()
  const { i18n: { language } } = React.useContext(I18nContext)


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

  const onSelectItem = (lang) => {
    i18n.changeLanguage(lang)
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
          <a className={router.pathname == '/' ? styles.active : ''}>{t('h1')}</a>
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
          <span onClick={toggleVisible}>{language} <img src="/dd.svg" alt="#"/></span>
          {visiblePopup && (
            <ul className={clsx(styles.header_langs, 'border-radius')}>
              <li
                onClick={() => language !== 'ru' ? onSelectItem('ru') : ''}
                className={clsx(language === 'ru' ? styles.active : '')}
                >
                ru
              </li>
              <li
                onClick={() => language !== 'kz' ? onSelectItem('kz') : ''}
                className={clsx(language === 'kz' ? styles.active : '')}
                >
                kz
              </li>
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
