import clsx from 'clsx'
import React from 'react'
import styles from './styles.module.scss'

const MainSliderItem = ({images, text, bool}) => {
  return (
    <div className={clsx(styles.main_slider_item, bool ? styles.bg : '', 'border-radius')}>
      {images}
      <h3>
        {text}
      </h3>
    </div>
  )
}

export default MainSliderItem
