import clsx from 'clsx'
import React from 'react'
import styles from './styles.module.scss'

export default function inputComponent({type, place, value, className, onClick}) {
  return <input 
    className={clsx(styles.input, className, 'border-radius')} 
    onClick={onClick}
    type={type} 
    placeholder={place} 
    value={value}
    required  />
}