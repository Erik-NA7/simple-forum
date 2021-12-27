import { useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa'
import style from '../Post.module.css'
import avatar from '../../assets/logo192.png'

function Comment(props) {

  const [ upVoteClass, setUpVoteClass ] = useState(style['upvote-btn'])
  const [ downVoteClass, setDownVoteClass ] = useState(style['downvote-btn'])
  const [ hasVoted, setHasVoted ] = useState(false)

  const [points, setPoints] = useState(props.points)

  const pointsUp = () => {
    setPoints(points + 1)
    setUpVoteClass(style.upvoted)
    setHasVoted(true)
  }
  
  const pointsDown = () => {
    setPoints(points - 1)
    setDownVoteClass(style.downvoted)
    setHasVoted(true)
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
        <div className={style['vote-action']}>
          <p className={style.points}>{points} point</p>
          <button
            className={upVoteClass}
            onClick={pointsUp}
            disabled={hasVoted}>
              <FaArrowUp style={{ width: '.7em'}}/></button>
          <button
            className={downVoteClass}
            onClick={pointsDown}
            disabled={hasVoted}>
              <FaArrowDown style={{ width: '.7em'}}/></button>
        </div>
      </div>
    </div>    
  )
}

export default Comment