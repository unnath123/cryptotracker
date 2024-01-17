import React from 'react'
import style from './style.css'

const Button = ({text, onClick, outlined}) => {
  return (
    <div className={outlined ? 'outlined-btn' : 'btn'} onClick={()=>onClick()}>{text}</div>
  )
}

export default Button