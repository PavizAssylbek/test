import React from 'react'
import styles from './styles.module.scss'

function Sidebar() {
  
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_content}>
        <img src="/home.svg" alt="home"/>
        <img src="/message.svg" alt="message"/>
        <img src="/text.svg" alt="text"/>
        <img src="/play.svg" alt="play"/>
        <img src="/user.svg" alt="user"/>
      </div>
    </div> 
  )

}

export default Sidebar