import { RiCloseFill } from 'react-icons/ri'
import style from './Icon.module.css'

import React from 'react'

function WindowClose(props) {
  return (
    <span className={style['close-icon-wrap']} onClick={props.onClose}>
      <RiCloseFill className={style['close-nav']}/>
    </span>
  )
}

export default WindowClose
