import { FaArrowDown } from 'react-icons/fa'
import { FaArrowUp} from 'react-icons/fa'
import style from './Post.module.css'

function PostContent(props) {
  const post = props.featuredPost  
  // console.log(post)
  return (
    <div className='container'>
      <main>
        <article className={style.featured}>
          <h1>{post.title}</h1>  
          <p>{post.body}</p>
          <h2>Komentar</h2>
          {post.comments.map((comments, id) => {
            return (
              <div key={id} className=''>
                <img/>
                <h3>{comments.user}</h3>
                <p>{comments.dateTime}</p>
                <p>{comments.comment}</p>
                <div className={style.action}>
                  <p className={style.points}>{comments.points} point</p>
                  <button><FaArrowUp/></button>
                  <button><FaArrowDown/></button>
                </div>

              </div>
            )
          })}
        </article>
      </main>
    </div> 
  )
}

export default PostContent
