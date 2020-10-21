import React from 'react'
import Head from 'next/head'
import RegistrationLayout from '../../components/RegistrationLayout'
import { Cookies } from 'react-cookie';

import styles from './styles.module.scss'
import clsx from 'clsx'
import InputComponent from '../../components/InputComponent'
import {Link} from '../../../i18n'
import { useRouter } from 'next/router';

const cookies = new Cookies();

function Login({}) {

  const route = useRouter()
  const [activeItem, setActiveItem] = React.useState(0);
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');

  const btnText = ['ЭЦП', 'Логин']

  const onSelectItem = id => {
    setActiveItem(id)
  }

  async function signIn() {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    const formdata = new FormData();
    formdata.append("username", login);
    formdata.append("password", password);
  
    const data = await fetch(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: formdata
    })
  
    const loginResponse = await data.json()
    if(loginResponse.content !== null) {
      cookies.set("token", loginResponse.content)
      setLogin('')
      setPassword('')
      route.push('/')
    } else {
      alert("Error man")
    }
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
              <form>
                <InputComponent type={'text'} place={'Логин'} value={login} onChange={setLogin}  />
                <InputComponent type={'password'} place={'Пароль'} value={password} onChange={setPassword}  />
                <InputComponent onClick={signIn} className={'submit'} type={'button'} place={''} value={'Вход'}  />
              </form>
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

export default Login