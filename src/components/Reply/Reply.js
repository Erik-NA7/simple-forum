import { FaArrowDown } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa'
import style from '../Main/Post.module.css'

function Reply(props) {
  // console.log(props.data)
  return (
    <div className={style.reply}>
    {props.data.map((reply, id) => {
      return (
        <div key={id}>
          <img/>
          <h3>{reply.user}</h3>
          <p>{reply.dateTime}</p>
          <p>{reply.comment}</p>
          <div className={style.action}>
            <p className={style.points}>{reply.points} point</p>
            <button><FaArrowUp/></button>
            <button><FaArrowDown/></button>
          </div>
        </div>
      )
    })}  
    </div>    
  )
}

export default Reply