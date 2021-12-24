import { useState, useEffect} from 'react'
import Post from '../components/Main/Post'


function Home() {
  const [ posts, setPosts ] = useState([])
  const [ featuredPost, setFeaturedPost ] = useState({})

  useEffect(() => {
    const getData = async() => {
      const response = await fetch('http://localhost:5000/posts')
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      const data = await response.json()
      setPosts(data)
      setFeaturedPost(data[0])
      console.log(data[0])
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

  console.log(posts[0])


  return (
    
    <>
      <Post featuredPost={featuredPost}>Post Content</Post>
    </>
  )
}

export default Home
