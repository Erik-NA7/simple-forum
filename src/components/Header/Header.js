import React from 'react'
import style from './Navbar.module.css'
import { FaSearch } from 'react-icons/fa'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Header(props) {

  return (
    <header className={style['App-header']}>
      <div className='container'>
        <div className={style['nav-brand']}>
          <h2>Forum anak IT</h2>
        </div>
      <nav className={style.navbar}>
        <div className={style['search-container']}>
          <input className={style.searchbox} type='search' name='search' placeholder='Search'></input>
          <FaSearch className={style['fa-search']}/>
        </div>
        <div className={style['nav-menu']}>
          <div className={style['dropdown']}>
            <button className={style['dropbtn']}>Categories</button>
            <div className={style['dropdown-content']}>
              <menu>
                <li>Linux</li>
                <li>Windows</li>
                <li>MAC OS</li>
                <li>Android</li>
                <li>iOS</li>
              </menu>
            </div>
          </div>
          <button onClick={props.onLogin}>Login</button>
          <button onClick={props.onRegister}>Register</button>
        </div>
      </nav>
      </div>
    </header>
  )
}

export default Header
