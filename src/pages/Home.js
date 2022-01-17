import { useState, useEffect} from 'react'
import TopFiveDiscussions from '../components/Aside/TopFiveDiscussions'
import Comment from '../components/Comment/Comment'
import CommentForm from '../components/Forms/Comment'
import baseURL from '../api/apiconfig'
import style from '../components/Post.module.css'

function Home() {
  const [ featuredPost, setFeaturedPost ] = useState({})
  const [ posts, setPosts ] = useState([])

  const dateTimeFormat = (dateString) => {
    const dates = new Date(dateString)
    const date = new Intl.DateTimeFormat('en-GB', {dateStyle: 'long'}).format(dates)
    const time = `${dates.getHours()}:${dates.getMinutes()}`
    return(`${date} ${time}`)
  }

  const onSubmit = (newComment) => {
    setFeaturedPost({
      ...featuredPost,
      comments: [
        ...featuredPost.comments,
        newComment
      ]
    })
    console.log(featuredPost)
    console.log(newComment)
  }

  useEffect(() => {
    const getData = async() => {
      const response = await fetch(baseURL)
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
      alert(error.message)
    }    
    return () => {
      getData()
    }
  }, [])

  return (
    <div className='container content'>
      <main className={style['main-content']}>
        <article className={style.posts}>
          <div className={style['post-main']}>
            <h1>{featuredPost.title}</h1>  
            <p>{featuredPost.body}</p>
          </div>          
          <h3>Komentar</h3>
          {featuredPost.comments &&
            <div className={style['comment-container']}>
              {featuredPost.comments.map((comment, idx) => {
              return (
              <div className={style.comments} key={idx} >
                <Comment
                  key={comment.id}
                  avatar={comment.avatar}
                  author={comment.author}
                  date={dateTimeFormat(comment.date)}
                  message={comment.message}
                  point={comment.point}
                  children={comment.replies && 
                    <div className={style.reply}>
                      {comment.replies.map((reply, idx) => {
                      return (
                        <Comment
                          key={reply.id}
                          avatar={reply.avatar}
                          author={reply.author}
                          date={dateTimeFormat(reply.date)}
                          message={reply.message}
                          point={reply.point}
                        />
                      )
                      })}
                    </div>
                    }  
                />
              </div>
              )
            })}
            </div>
          }
        </article>
        <CommentForm onSubmit={onSubmit}/>
      </main>
      <TopFiveDiscussions data={posts}/>  
    </div> 
  )
}

export default Home
