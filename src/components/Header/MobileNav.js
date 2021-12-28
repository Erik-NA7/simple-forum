import { FaSearch } from 'react-icons/fa'
import WindowClose from '../Icons/WindowClose'
import style from './Mobilenav.module.css'

function MobileNav(props) {

  return (
    <div className={style['mobile-nav']}>
      <WindowClose onClose={props.onClose}/>
      <div className={style['search-container']}>
        <input className={style.searchbox} type='search' name='search' placeholder='Search'></input>
        <i className={style['fa-search']}><FaSearch /></i>
      </div>
      <div className={style['mobile-nav-menu']}>
        <button>Categories</button>
        <button className={style['category']}>Linux</button>
        <button className={style['category']}>Windows</button>
        <button className={style['category']}>MAC OS</button>
        <button className={style['category']}>Android</button>
        <button className={style['category']}>iOS</button>
        <button onClick={props.onLogin}>Login</button>
        <button onClick={props.onRegister}>Register</button>
      </div>
    </div>
  )
}

export default MobileNav
