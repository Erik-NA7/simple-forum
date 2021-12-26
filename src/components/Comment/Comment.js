import { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa'
import style from '../Post.module.css'
import avatar from '../../assets/logo192.png'

function Comment(props) {

  const [points, setPoints] = useState(props.points)

  const pointsDown = () => {
    if (points === 0) {
      return
    }
    setPoints(points - 1)
  }

  const pointsUp = () => {
    setPoints(points + 1)
  }
  
  return (
    <div className={style.comment}>
      <div className={style.avatar}>
        <img className={style.avatar} src={avatar} alt='avatar'/>
      </div>
      <div className={style['comment-body']}>
        <p className={style['user-name']}>{props.user}</p>
        <p className={style.dateTime}>{props.dateTime}</p>
        <p>{props.comment}</p>
        <div className={style.action}>
          <p className={style.points}>{points} point</p>
          <button id='points-up' onClick={pointsUp}><FaArrowUp/></button>
          <button id='points-down' onClick={pointsDown}><FaArrowDown/></button>
        </div>
      </div>
    </div>    
  )
}

export default Comment