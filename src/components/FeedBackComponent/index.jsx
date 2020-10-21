import React from 'react'
import { Link } from '../../../i18n'
import InputComponent from '../InputComponent'

import styles from './styles.module.scss'
import clsx from 'clsx'
import SmallFedback from '../SmallFeedback'

export default function FeedBackComponent() {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);

  const toggleVisible = () => {
    setVisiblePopup(!visiblePopup)
  }

  const allDropDown = ['Тематика обращения', 'ТУТ ЧЁТА БЫЛО', 'АААААА', 'LAAAAAA']
  const activeDropDown = allDropDown[activeItem]

  const onSelectItem = id => {
    setActiveItem(id)
    setVisiblePopup(false)
  }


  return (
    <div className={clsx(styles.feedback, 'container')}>
      <div className={styles.feedback_head}>
        <h2>Обратная связь</h2>
        <Link href="/">
          <a className={styles.feedback_link}><span>Назад</span> <img src="/back.png" alt="back"/></a>
        </Link>
      </div>
      <div className={styles.feedback_content}>
        <form className={styles.feedback_left}>
          <InputComponent type={'text'} place={'Тема обращения'} className={styles.feedback_input}  />
          <div className={styles.feedback_select}>
            <div className={styles.feedback_arrow}>
              <p className={styles.feedback_btn} onClick={toggleVisible}>{activeDropDown}</p>
            </div>
            {
              visiblePopup && (
                <div className={styles.feedback_select_content}>
                  <ul>
                    {allDropDown.map((el,id) => (
                      <li 
                        onClick={() => activeItem !== id ? onSelectItem(id) : ''}
                        className={clsx(activeItem === id ? styles.feedback_active : '', styles.feedback_select_text)}
                        key={id}
                      >
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            }
          </div>
          <textarea 
            className={styles.feedback_textarea}
            placeholder="Ваше обращение">
          </textarea>
          <button type="submit" className={clsx(styles.feedback_submit, 'border-radius')}>Отправить</button>
        </form>
        <div className={styles.feedback_right}>
          <h5>Ваши обращения</h5>
          {
            Array(4)
            .fill(0)
            .map((_,id) => (
              <SmallFedback id={id} key={id} bool={true} />
            ))
          }
        </div>
      </div>
    </div>
  )


}