import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import MobileNav from './MobileNav'
import style from './Header.module.css'

function Header(props) {

  const [ showMobileNav, setshowMobileNav ] = useState(false)
  const [ searchString, setSearchString ] = useState('')

  const searchHandler = (e) => {
    setSearchString(e.target.value)
  }

  const onSearch = (e) => {
    e.preventDefault()
    if (searchString.trim() === '') {
      alert(`Ketik item pencarian`)
    }
  }

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
            <form className={style['search-container']} onSubmit={onSearch}>
              <input
                className={style.searchbox}
                type='search'
                name='search'
                placeholder='Search'
                onChange={searchHandler}>
              </input>
              <button className={style['fa-search']} type='submit'><FaSearch /></button>
            </form>
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
    
      <MobileNav
        isOpen={showMobileNav}
        onRequestClose={onToggleNav}
        onClose={onToggleNav}
        onLogin={props.onLogin}
        onRegister={props.onRegister}
      />
    </>
  )
}

export default Header
