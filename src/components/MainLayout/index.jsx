import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import { Link } from '../../../i18n'


export default function MainLayout({children}) {
  return (
    <div className="home">

      <main className="flex">
        <Sidebar />
        <div className="content">
          <Header />

          {children}



          <section className="footer-top">
            <div className="container">
              <div className="footer-top_flex">
                <Link href="https://www.gov.kz/memleket/entities/mcs">
                  <a className="flex" target="_blank">
                    <img src="/footer1.jpg" alt="#"/>
                    Министерство культуры и спорта Республики Казахстан
                  </a>
                </Link>
                <Link href="https://qaztourism.kz/">
                  <a className="flex" target="_blank">
                    <img src="/footer2.jpg" alt="#"/>
                    Официальный веб-сайт АО "НК "Kazakh Tourism"
                  </a>
                </Link>
                <Link href="https://tourstat.kz">
                  <a className="flex" target="_blank">
                    <img src="/footer3.jpg" alt="#"/>
                    Национальный туристический портал
                  </a>
                </Link>
                <Link href="https://kazakhstan.travel">
                  <a className="flex" target="_blank">
                    <img src="/footer1.jpg" alt="#"/>
                    Информационная система для получения статистических данных "Tourstat"
                  </a>
                </Link>
              </div>
            </div>
          </section>
          <footer className="footer">
            <div className="container">
            <div className="footer-flex">
              <div className="footer-img">
                <Link href="/">
                  <a>
                    <img src="/h_logo.svg" alt="#"/>
                  </a>
                </Link>
              </div>
              <div className="footer-links">
                <Link href="/">
                  <a>
                    Главная
                  </a>
                </Link>
                <Link href="/news">
                  <a>
                    Новости
                  </a>
                </Link>
                <Link href="/project">
                  <a>
                    Публикации
                  </a>
                </Link>
                <Link href="/webinars">
                  <a>
                    Вебинары
                  </a>
                </Link>
              </div>
            </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}