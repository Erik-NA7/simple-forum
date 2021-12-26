import style from './Aside.module.css'

function TopFiveDiscussions(props) {
  return (
    <aside className={style.aside}>
      <h4>Diskusi 5 teratas</h4>
      <div>
        {props.data && props.data.map((post, id) => {
          return (
            <div className={style['top-posts']}>
              <span className={style['post-number']}>
                {id + 1}</span>
              <p key={id}>{post.title}</p>
            </div>
          )
        })}
      </div>
    </aside>
  )
}

export default TopFiveDiscussions
