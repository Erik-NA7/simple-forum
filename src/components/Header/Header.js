import React from 'react'
import style from './Navbar.module.css'
import { FaSearch } from 'react-icons/fa'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Header() {


  return (
    <header className='App-header'>
      <div className='container'>
        <div className={style['nav-brand']}>
          <h3>Forum anak IT</h3>
        </div>
      <nav className={style.navbar}>
        <div className={style['search-container']}>
          <input className={style.searchbox} type='search' name='search' placeholder='Search'></input>
          <FaSearch className={style['fa-search']}/>
          {/* <FontAwesomeIcon icon={faSearch} className={style['fa-search']}/> */}
        </div>
        <ul className={style['nav-menu']}>
          <li className={style['nav-item']}>Categories</li>
          <li className={style['nav-item']}>Login</li>
          <li className={style['nav-item']}>Register</li>
        </ul>
      </nav>
      </div>
    </header>
    
  )
}

export default Header
