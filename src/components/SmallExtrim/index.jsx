import clsx from 'clsx'
import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

export default function SmallExtrim({id, smallIMG}) {

  return (
    <Link href={`/project/extrim/${id}`}>
      <a className={clsx(styles.smallexpert, smallIMG === true ? styles.smallexpert_small : '')}>
        {smallIMG === false && (
          <div className={styles.smallexpert_img}>
            <img src="/extrim.jpg" alt="#"/>
          </div>
        )}
        <div className={clsx(styles.smallexpert_content, smallIMG === true ? styles.smallexpert_content_small : '')}>
          {smallIMG && 
            <div className={clsx(styles.smallexpert_img, smallIMG === true ? styles.smallexpert_img_small : '')}>
              <img src="/extrim.jpg" alt="#"/>
            </div>
          }
          <em>Марат Ахметжанов</em>
          <div className={clsx(styles.smallexpert_text, smallIMG === true ? styles.smallexpert_text_small : '')}>
            <b>Мнение эксперта о развитии туризма в Казахстане</b>
            <p>В Шымкенте прошла республиканская туристская ярмарка Silk Road Fair. В рамках ярмарки состоялся форум, на котором присутствовали</p>
          </div>
        </div>
      </a>
    </Link>
  )


}