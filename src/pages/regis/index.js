import React from 'react'
import Head from 'next/head'
import RegistrationLayout from '../../components/RegistrationLayout'
import InputComponent from '../../components/InputComponent'

import styles from './styles.module.scss'
import clsx from 'clsx'
import Link from 'next/link'

export default function registration() {

  
  return (
    <RegistrationLayout>
      <Head>
        <title>Tourism: Online</title>
      </Head>
      <div className={styles.registration}>
        <h6>Регистрация</h6>
        <div className={clsx(styles.registration_bg, 'border-radius')}>
          <InputComponent type={'text'} place={'ФИО'}  />
          <InputComponent type={'number'} place={'ИНН'}  />
          <InputComponent type={'number'} place={'Телефон'}  />
          <InputComponent type={'email'} place={'Email'}  />
          <InputComponent className={'submit'} type={'submit'} place={''} value={'Регистрация'}  />
          <Link href='/login'>
            <a className={styles.registration_link}>Вход</a>
          </Link>
        </div>
      </div>
    </RegistrationLayout>
  )
}