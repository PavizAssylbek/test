import clsx from 'clsx'
import React from 'react'
import styles from './styles.module.scss'

export default function inputComponent({type, place, value, className, onClick, onChange}) {
  return <input 
    className={clsx(styles.input, className, 'border-radius')} 
    onClick={onClick}
    onChange={e => onChange(e.target.value)}
    type={type} 
    placeholder={place} 
    value={value}
    required  />
}