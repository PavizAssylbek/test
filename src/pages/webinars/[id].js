import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../../components/MainLayout'


import clsx from 'clsx'
import styles from './styles.module.scss'

export default function insideWebinars() {

  const [visiblePopup, setVisiblePopup] = React.useState(false);

  const toggleVisible = () => {
    setVisiblePopup(!visiblePopup)
  }


  return (
    <MainLayout>

      <Head>
        <title>Tourism: Webinars</title>
      </Head>

      <div className={clsx(styles.webinars, 'container')}>
        <div className={styles.webinars_head}>
          <h2>Семейный отдых в стиле Blue Diamond</h2>
          <Link href="/webinars">
            <a className={styles.webinars_link}><span>Назад</span> <img src="/back.png" alt="back"/></a>
          </Link>
        </div>
        <h6><img src="/users.svg" alt="#"/>67 участников</h6>
        <div className={styles.webinars_content}>
          <div className={styles.webinars_left}>
            <img src="/video.jpg" alt="#"/>
          </div>
          <div className={clsx(styles.webinars_right, 'border-radius')}>
            <div className={styles.webinars_select}>
              <h6 onClick={toggleVisible}>
                <img src="/users.svg" alt="#"/>
                67 участников 
                <img src="/chevron-down.svg" alt="#"/>
              </h6>
              {visiblePopup && (
                <ul className={styles.webinars_select_content}>
                  <li><img src="/user_blue.svg" alt="#"/>Vasya</li>
                  <li><img src="/user_blue.svg" alt="#"/>Sasha</li>
                  <li><img src="/user_blue.svg" alt="#"/>Katya</li>
                </ul>
              )}
              <hr/>
            </div>
            <div className={styles.webinars_content_text}>
              <div className={clsx(styles.webinars_text, 'border-radius')}>
                <img src="/user_blue.svg" alt="#"/>
                <b>Имя</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna tincidunt cursus netus feugiat non orci vitae et. Viverra et egestas donec velit molestie neque, aliquam sit tincidunt.</p>
              </div>
              <div className={clsx(styles.webinars_text, 'border-radius')}>
                <img src="/user_blue.svg" alt="#"/>
                <b>Имя</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna tincidunt cursus netus feugiat non orci vitae et. Viverra et egestas donec velit molestie neque, aliquam sit tincidunt.</p>
              </div>
            </div>
            <hr/>
            <textarea className="border-radius" placeholder="Написать"></textarea>
            <button type="submit">Отправить</button>
          </div>
        </div>
      </div>
    </MainLayout>
  )


}