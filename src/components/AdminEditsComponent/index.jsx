import React from 'react'
import Link from 'next/link'
import InputMask from 'react-input-mask';

import styles from './styles.module.scss'
import clsx from 'clsx'


export default function AdminEditsComponent({title = 'Title', link, save}) {

  const [visiblePopup, setVisiblePopup] = React.useState(true);
  const [activeItem, setActiveItem] = React.useState(0);
  const fileInput = React.createRef()
  const imgFile = React.createRef()

  const allLang = ['RU', 'KZ']


  const onSelectItem = id => {
    setActiveItem(id)
    setVisiblePopup(!visiblePopup)
  }

  const addImgFile = () => {
    const reader = new FileReader();
    reader.onload = function (e) {
      imgFile.current.src = e.target.result;
    };
    reader.readAsDataURL(fileInput.current.files[0]);
  }

  return(
    <div className={styles.edits}>
      <div className={styles.edits_head}>
        <h2>{title}</h2>
        <Link href={link}>
          <a className={styles.edits_link}><span>Назад</span> <img src="/back.png" alt="back"/></a>
        </Link>
      </div>
      <div className={styles.edits_btn}>
        {allLang.map((el,id) => (
          <button 
            onClick={() => activeItem !== id ? onSelectItem(id) : ''}
            className={clsx(activeItem === id ? styles.edits_btn_active : '')}
            key={id}>
            {el}
          </button>
        ))}
      </div>
      <form>
      {visiblePopup === true 
        ? (
          <div className={styles.edits_content}>
            <div className={styles.edits_content__left}>
              <h2>Заголовок</h2>
              <label htmlFor="title">
                <input type="text" id="title" placeholder="Название заголовок"/>
              </label>
              <h2>Дата</h2>
              <label htmlFor="data" className={styles.data}>
                <InputMask id="data" mask="99.99.9999" />
              </label>
              <h2>Описание</h2>
              <label htmlFor="text" className={styles.text}>
              <textarea id="text"></textarea>
              </label>
              <h2>Содержимое</h2>
              <label htmlFor="textinfo" className={styles.textinfo}>
                <textarea></textarea>
              </label>
            </div>
            <div className={styles.edits_content__right}>
              <h2>Главное изображение</h2>
              <img ref={imgFile} className={styles.edits_newimg} src="" alt=""/>
              <label htmlFor="btn_file">
                <img src="/btn_file.jpg" alt="#"/>
                Добавить изображение
                <input type="file" hidden id="btn_file" accept=".jpg, .jpeg, .png" ref={fileInput} onChange={addImgFile}/>
              </label>
            </div>
          </div>
        )
        : (
          <div className={styles.edits_content}>
            <div className={styles.edits_content__left}>
              <h2>Заголовок</h2>
              <label htmlFor="title">
                <input type="text" id="title" placeholder="Название заголовок"/>
              </label>
              <h2>Дата</h2>
              <label htmlFor="data" className={styles.data}>
                <InputMask id="data" mask="99.99.9999" />
              </label>
              <h2>Описание</h2>
              <label htmlFor="text" className={styles.text}>
              <textarea id="text"></textarea>
              </label>
              <h2>Содержимое</h2>
              <label htmlFor="textinfo" className={styles.textinfo}>
                <textarea></textarea>
              </label>
            </div>
            <div className={styles.edits_content__right}>
              <h2>Главное изображение</h2>
              <img ref={imgFile} className={styles.edits_newimg} src="" alt=""/>
              <label htmlFor="btn_file">
                <img src="/btn_file.jpg" alt="#"/>
                Добавить изображение
                <input type="file" hidden id="btn_file" accept=".jpg, .jpeg, .png" ref={fileInput} onChange={addImgFile}/>
              </label>
            </div>
          </div>
        )
      }
      <div style={{marginBottom: "15px"}}>
        <input type="checkbox" className={styles.edits_custom_checkbox} id="checkBox1" />
        <label className={styles.edits_checkbox} htmlFor="checkBox1">Опубликовать</label>
      </div>
      {save && (
        <div>
          <input type="checkbox" className={styles.edits_custom_checkbox} id="checkBox2" />
          <label className={styles.edits_checkbox} htmlFor="checkBox2">Сохранить вебинар на сайте после завершения</label>
      </div>
      )}
      <input type="submit" value={'Соханить'} className={clsx(styles.edits_submit, 'border-radius')}/>
      </form>
    </div>
  )



}