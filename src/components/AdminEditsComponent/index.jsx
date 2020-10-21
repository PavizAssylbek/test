import React from 'react'
import Link from 'next/link'
import InputMask from 'react-input-mask';

import styles from './styles.module.scss'
import clsx from 'clsx'


export default function AdminEditsComponent({title = 'Title', link, save, data}) {

  const [visiblePopup, setVisiblePopup] = React.useState(true);
  const [activeItem, setActiveItem] = React.useState(0);
  const fileInput = React.createRef()
  const imgFile = React.createRef()

  const [headerValueRu, setHeaderValueRu] = React.useState(data?.data?.heading_ru)
  const [headerValueKz, setHeaderValueKz] = React.useState(data?.data?.heading_kz)

  const [date, setDate] = React.useState(data?.data?.date)

  const [descripRu, setDescripRu] = React.useState(data?.data?.description_ru)
  const [descripKz, setDescripKz] = React.useState(data?.data?.description_kz)

  const [contentRu, setContentRu] = React.useState(data?.data?.content_ru)
  const [contentKz, setContentKz] = React.useState(data?.data?.content_kz)
  
  const [status, setStatus] = React.useState(data?.data?.status?.id)
  const [photo, setPhoto] = React.useState(data?.data?.photo?.photo)

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

  const statusChange = e =>{
    if(e === 2) {
      setStatus(1)
    } else {
      setStatus(2)
    }
  }


  const postData = () => {
    
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
                <input 
                  onChange={e => setHeaderValueRu(e.target.value)}
                  type="text"
                  id="title" 
                  placeholder="Название заголовок" 
                  value={headerValueRu}/>
              </label>
              <h2>Дата</h2>
              <label htmlFor="data" className={styles.data}>
                <InputMask 
                  id="data" 
                  mask="9999.99.99" 
                  value={date} 
                  onChange={e => setDate(e.target.value)} 
                />
              </label>
              <h2>Описание</h2>
              <label htmlFor="text" className={styles.text}>
              <textarea id="text" value={descripRu} onChange={e => setDescripRu(e.target.value)}></textarea>
              </label>
              <h2>Содержимое</h2>
              <label htmlFor="textinfo" className={styles.textinfo}>
                <textarea value={contentRu} onChange={e => setContentRu(e.target.value)}></textarea>
              </label>
            </div>
            <div className={styles.edits_content__right}>
              <h2>Главное изображение</h2>
              <img ref={imgFile} className={styles.edits_newimg} src={`${process.env.NEXT_PUBLIC_BASE_URL}/storage/${photo}`} alt=""/>
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
                <input 
                  value={headerValueKz}
                  onChange={e => setHeaderValueKz(e.target.value)}
                  type="text" 
                  id="title" 
                  placeholder="Название заголовок"  />
              </label>
              <h2>Дата</h2>
              <label htmlFor="data" className={styles.data}>
                <InputMask 
                    id="data" 
                    mask="9999.99.99" 
                    value={date} 
                    onChange={e => setDate(e.target.value)} 
                  />
              </label>
              <h2>Описание</h2>
              <label htmlFor="text" className={styles.text}>
              <textarea id="text" value={descripKz} onChange={e => setDescripKz(e.target.value)}></textarea>
              </label>
              <h2>Содержимое</h2>
              <label htmlFor="textinfo" className={styles.textinfo}>
                <textarea value={contentKz} onChange={e => setContentKz(e.target.value)}></textarea>
              </label>
            </div>
          </div>
        )
      }
      <div style={{marginBottom: "15px"}}>
        <input
          onChange={() => statusChange(status)}
          checked={status === 2 ? true : false}
          type="checkbox" 
          className={styles.edits_custom_checkbox} 
          id="checkBox1" />
        <label className={styles.edits_checkbox} htmlFor="checkBox1">Опубликовать</label>
      </div>
      {save && (
        <div>
          <input type="checkbox" className={styles.edits_custom_checkbox} id="checkBox2" />
          <label className={styles.edits_checkbox} htmlFor="checkBox2">Сохранить вебинар на сайте после завершения</label>
      </div>
      )}
      <input type="submit" value={'Соханить'} onClick={postData} className={clsx(styles.edits_submit, 'border-radius')}/>
      </form>
    </div>
  )
}