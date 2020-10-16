import React from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'
import clsx from 'clsx'


export default function SmallFeedback({id, bool}) {

  return(
      <div className={clsx(styles.smallfedback, 'border-radius')}>
        <div className={styles.smallfedback_content}>
          <div className="">
            <p className={styles.smallfedback_title}>
              Тема: Название темы обращения
            </p>
            <span className={styles.smallfedback_data}>21.09.2020</span>
            {
              bool === true 
              ? 
              (
                <p className={styles.smallfedback_check}><img src="/check.svg" alt="#"/>Есть ответ</p>
              )
              :
              (
                <p className={styles.smallfedback_stop}><img src="/stop.svg" alt="#"/>Ждет ответа</p>
              )
            }
          </div>
          <div className="">
            <Link href={`/feedback/${id}`}>
              <a className={styles.feedback_link}><img src="/front.png" alt="back"/></a>
            </Link>
          </div>
        </div>
      </div>
  )

}