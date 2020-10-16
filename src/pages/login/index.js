import React from 'react'
import Head from 'next/head'
import RegistrationLayout from '../../components/RegistrationLayout'

import styles from './styles.module.scss'
import clsx from 'clsx'
import InputComponent from '../../components/InputComponent'
import Link from 'next/link'

export default function login() {

  const [activeItem, setActiveItem] = React.useState(0);

  const btnText = ['ЭЦП', 'Логин']

  const onSelectItem = id => {
    setActiveItem(id)
  }


  return (
    <RegistrationLayout>
      <Head>
        <title>Tourism: Online</title>
      </Head>
      <div className={styles.login}>
        <h6>Вход в систему</h6>
        <div className={styles.login_btn}>
          {
            btnText && (
              btnText.map((el,i) => (
                <button  
                  className={clsx(activeItem === i ? styles.login_active : '')}
                  onClick={() => activeItem !== i ? onSelectItem(i) : ''}
                  key={i}
                >
                  {el}
                </button>
              ))
            )
          }
        </div>
        {
          activeItem === 0 
          ? 
          (
            <div className={clsx(styles.login_bg, 'border-radius')}>
              <div className={clsx(styles.login_download, 'border-radius')}>
                <div>
                  <img src="/download.svg" alt="#"/>
                  Загрузить
                </div>
              </div>
            </div>
          ) 
          : 
          (
            <div className={clsx(styles.login_bg, 'border-radius')}>
              <InputComponent type={'text'} place={'Логин'}  />
              <InputComponent type={'text'} place={'Пароль'}  />
              <InputComponent className={'submit'} type={'submit'} place={''} value={'Вход'}  />
              <Link href="/">
                <a className={styles.login_forgot}>Забыли пароль или логин?</a>
              </Link>
              <Link href="/regis">
                <a className={styles.login_reg}>Регистрация</a>
              </Link>
            </div>
          )
        }
      </div>
    </RegistrationLayout>
  )
}