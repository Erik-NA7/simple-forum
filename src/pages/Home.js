import { useState, useEffect} from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { FaArrowUp} from 'react-icons/fa'
import Comment from '../components/Comment/Comment'
import Reply from '../components/Reply/Reply'
import style from '../components/Main/Post.module.css'
import Post from '../components/Main/Post'


function Home() {
  const [ posts, setPosts ] = useState([])
  // const [ featuredPost, setFeaturedPost ] = useState({})

  useEffect(() => {
    const getData = async() => {
      const response = await fetch('http://localhost:5000/posts')
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      const data = await response.json()
      setPosts(data)
      // setFeaturedPost(data[0])
    }

    try {
      getData()
    } catch(error) {
      console.log(error.message)
    }
    
    return () => {
      getData()
    }
  }, [])

  // console.log(posts)

  return (
    <div className='container'>
      <main>
        {posts.map((post, id) => {
          return (
            <article key={id} className={style.featured}>
              <h1>{post.title}</h1>  
              <p>{post.body}</p>
              <h2>Komentar</h2>
              {post.comments && post.comments.map((comment, id) => {
                return (
                <div key={id} className={style.comment}>
                  <Comment
                    user={comment.user}
                    dateTime={comment.dateTime}
                    comment={comment.comment}
                    points={comment.points}
                  />
                  {console.log(comment.replies)}
                  {comment.replies && <Reply data={comment.replies}/>}
                  {/* {comment.replies && comment.replies.map((reply, id) => {
                    return (
                    <div className={style.reply}>
                      <Reply
                        key={id}
                        user={reply.user}
                        dateTime={reply.dateTime}
                        comment={reply.comment}
                        points={reply.points}
                      />  
                    </div>
                    )
                  })} */}
                </div>
                )
              })}
            </article>
          )
        })}
      </main>
    </div> 
      // <Post featuredPost={featuredPost}>Post Content</Post>
    
  )
}

export default Home
