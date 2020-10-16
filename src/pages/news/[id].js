import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../../components/MainLayout'
import clsx from 'clsx'

import styles from './styles.module.scss'
import SmallNews from '../../components/SmallNews'

export default function insideNews() {
  return (
    <MainLayout>
      <Head>
        <title>Tourism: News</title>
      </Head>
      <div className={clsx(styles.inside, 'container')}>
        <div className={styles.inside_head}>
          <h2>Новости</h2>
          <Link href="/news">
            <a className={styles.inside_link}><span>Назад</span> <img src="/back.png" alt="back"/></a>
          </Link>
        </div>
        <div className={styles.inside_content}>
          <div className={styles.inside_left}>
            <img className="border-radius" src="/inside.png" alt="#"/>
            <h3 className={styles.inside_left_title}>Более 20 новых туробъектов появятся в Алматинской области до конца года</h3>
            <span className={styles.inside_left_data}>21.09.2020</span>
            <div className={styles.inside_flex}>
              <p className={styles.inside_view}>
                <img src="/eye2.svg" alt="#"/>
                222
              </p>
              <div className={styles.inside_socialnetwork}>
                <img src="/logo-vk.svg" alt="#"/>
                <img src="/logo-twitter.svg" alt="#"/>
                <img src="/logo-facebook.svg" alt="#"/>
                <img src="/logo-instagram.svg" alt="#"/>
              </div>
            </div>
            <div className={styles.inside_anytext}>
              <p>
                <b>
                Как сообщили в областном управлении туризма, по итогам первого полугодия в области функционируют 795 туристических мест, по сравнению с соответствующим периодом прошлого года достигнут рост на 4%.
                </b>
              </p>
              <p>
                "Уже введено в эксплуатацию 14 объектов туристской инфраструктуры с привлечением частных инвестиций на сумму 1081 млн тенге. В том числе один комплекс в Жамбылском районе, остальные 13 - на побережье озера Алаколь. Количество обслуженных посетителей составило 421,9 тыс. человек или 54% к аналогичному периоду прошлого года. Оказано платных туристско-оздоровительных услуг на сумму 3621 млн тенге или 63% к уровню прошлого года", - сообщили в Управлении.  
              </p>
              <p>
                Кроме того, на территории горного кластера ведется реализация долгосрочных крупных инвестиционных проектов по строительству курортов "Апорт" и "Ак Булак" в Талгарском районе, "Тургень" - в Енбекшиказахском районе и развлекательного комплекса Park Canyon в Райымбекском районе на общую сумму 542,7 млрд тенге частных инвестиций. 
              </p>
              <p>
                На побережье озера Алаколь появится коттеджный городок c летним амфитеатром Alakol Apartments, сумма инвестиций в проект составляет 4 млрд тенге.
              </p>
              <p>
                "Уже введено в эксплуатацию 14 объектов туристской инфраструктуры с привлечением частных инвестиций на сумму 1081 млн тенге. В том числе один комплекс в Жамбылском районе, остальные 13 - на побережье озера Алаколь. Количество обслуженных посетителей составило 421,9 тыс. человек или 54% к аналогичному периоду прошлого года. Оказано платных туристско-оздоровительных услуг на сумму 3621 млн тенге или 63% к уровню прошлого года", - сообщили в Управлении.  
              </p>
              <p>
                Кроме того, на территории горного кластера ведется реализация долгосрочных крупных инвестиционных проектов по строительству курортов "Апорт" и "Ак Булак" в Талгарском районе, "Тургень" - в Енбекшиказахском районе и развлекательного комплекса Park Canyon в Райымбекском районе на общую сумму 542,7 млрд тенге частных инвестиций. 
              </p>
            </div>
          </div>
          <div className={styles.inside_right}>
            {
              Array(5)
              .fill(0)
              .map((_,i) => (
                <SmallNews id={i} key={i} />
              ))
            }
          </div>
        </div>
      </div>
    </MainLayout>
  )
}