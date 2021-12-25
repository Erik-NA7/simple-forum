import { FaArrowDown } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa'
import style from '../Main/Post.module.css'

function Comment(props) {
  return (
    <div className=''>
      <img/>
      <h3>{props.user}</h3>
      <p>{props.dateTime}</p>
      <p>{props.comment}</p>
      <div className={style.action}>
        <p className={style.points}>{props.points} point</p>
        <button><FaArrowUp/></button>
        <button><FaArrowDown/></button>
      </div>
    </div>    
  )
}

export default Comment
