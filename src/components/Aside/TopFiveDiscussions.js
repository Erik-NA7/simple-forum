import style from './Aside.module.css'

function TopFiveDiscussions(props) {
  return (
    <aside className={style.aside}>
      <h4>Diskusi 5 teratas</h4>
      <div>
        {props.data && props.data.map((post, id) => {
          return (
            <div key={id} className={style['top-posts']}>
              <span className={style['post-number']}>
                {id + 1}</span>
              <a key={id} href={`/${post.title}`}>{post.title}</a>
            </div>
          )
        })}
      </div>
    </aside>
  )
}

export default TopFiveDiscussions
