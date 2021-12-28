import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import MobileNav from './MobileNav'
import style from './Navbar.module.css'

function Header(props) {

  const [ showMobileNav, setshowMobileNav ] = useState(false)

  const onToggleNav = () => {
    setshowMobileNav(!showMobileNav)
  }

  return (
    <>
    <header className={style['App-header']}>
      <div className={`container ${style.nav}`}>
        <div className={style['nav-brand']}>
          <h3>Forum anak IT</h3>
          <button className={style['nav-toggle']} onClick={onToggleNav}><FaBars/></button>
        </div>    
        
        <nav className={style.navbar}>
          <div className={style['search-container']}>
            <input className={style.searchbox} type='search' name='search' placeholder='Search'></input>
            <i className={style['fa-search']}><FaSearch /></i>
          </div>
          <div className={style['nav-menu']}>
            <div className={style['dropdown']}>
              <button className={style['navmenu-btn']}>Categories</button>
              <div className={style['dropdown-content']}>
                <button>Linux</button>
                <button>Windows</button>
                <button>MAC OS</button>
                <button>Android</button>
                <button>iOS</button>
              </div>
            </div>
            <button className={style['navmenu-btn']} onClick={props.onLogin}>Login</button>
            <button className={style['navmenu-btn']} onClick={props.onRegister}>Register</button>
          </div>
        </nav>
      </div>
    </header>
    { showMobileNav && <MobileNav
      onClose={onToggleNav}
      onLogin={props.onLogin}
      onRegister={props.onRegister}
      />}
    </>
  )
}

export default Header
