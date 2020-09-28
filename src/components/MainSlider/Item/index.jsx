import clsx from 'clsx'
import React from 'react'
import styles from './styles.module.scss'

const MainSliderItem = ({images, text}) => {
  return (
    <div className={clsx(styles.main_slider_item, 'border-radius')}>
      {images}
      <h3>
        {text}
      </h3>
    </div>
  )
}

export default MainSliderItem
