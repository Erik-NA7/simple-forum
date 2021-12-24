import React from 'react'
import style from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Header() {


  return (
    <nav className={style.navbar}>
      <div className={style['nav-brand']}>
        <h3>Forum anak IT</h3>
      </div>
      <div class={style['search-container']}>
        <input class={style.searchbox} type="search" name="search" placeholder="Search"></input>
        <FontAwesomeIcon icon={faSearch}/>
      </div>
      <ul className={style['nav-menu']}>
        <li className={style['nav-item']}>Categories</li>
        <li className={style['nav-item']}>Login</li>
        <li className={style['nav-item']}>Register</li>
      </ul>
    </nav>
  )
}

export default Header
