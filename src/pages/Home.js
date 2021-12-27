import { useState, useEffect} from 'react'
import TopFiveDiscussions from '../components/Aside/TopFiveDiscussions'
import Comment from '../components/Comment/Comment'
import CommnetForm from '../components/Forms/Comment'
import style from '../components/Post.module.css'

function Home() {
  const [ featuredPost, setFeaturedPost ] = useState({})
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    const getData = async() => {
      const response = await fetch('http://localhost:5000/posts')
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      const data = await response.json()
      setFeaturedPost(data[0])
      setPosts(data.slice(1, 6))
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

  return (
    <div className='container content'>
      <main className='main-content'>
        <article className={style.posts}>
          <div className={style['post-main']}>
            <h1>{featuredPost.title}</h1>  
            <p>{featuredPost.body}</p>
          </div>          
          <h2>Komentar</h2>
          {featuredPost.comments &&
            <div className={style['comment-container']}>
              {featuredPost.comments.map((comment, id) => {
              return (
              <div className={style.comments} key={id} >
                <Comment
                  key={id}
                  user={comment.user}
                  dateTime={comment.dateTime}
                  comment={comment.comment}
                  points={comment.points}
                />
                {comment.replies && 
                <div className={style.reply}>
                  {comment.replies.map((reply, id) => {
                  return (
                    <Comment
                      key={id}
                      user={reply.user}
                      dateTime={reply.dateTime}
                      comment={reply.comment}
                      points={reply.points}
                    />
                  )
                  })}
                </div>
                }  
              </div>
              )
            })}
            </div>
          }
        </article>
        <CommnetForm/>
      </main>
      <TopFiveDiscussions data={posts}/>  
    </div> 
  )
}

export default Home
