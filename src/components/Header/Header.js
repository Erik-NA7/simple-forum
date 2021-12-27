import { useState, useEffect } from 'react'
import style from './Navbar.module.css'
import { FaSearch } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'

const useWindowSize = () => {
  const [ navbar, setNavBar] = useState(null)
  const [ navtoglle, setNavToggle] = useState(null)
  useEffect(() => {
    const getWindowSize = () => {
      if (window.innerWidth <= 1024) {
        setNavBar(false)
        setNavToggle(true)
      }
      if (window.innerWidth > 1024) {
        setNavBar(true)
        setNavToggle(false)
      }
    }
    window.addEventListener("resize", getWindowSize)
    return () => {
      window.removeEventListener("resize", getWindowSize)
    }
  })
  return [navbar, navtoglle] 
}

function Header(props) {

  let [ showNavBar, showNavToggle ] = useWindowSize()

  const [ toggleNav, setToggleNav ] = useState(false)

  const onToggleNav = () => {
    setToggleNav(!toggleNav)
  }

  return (
    <header className={style['App-header']}>
      <div className={`container ${style.nav}`}>
        <div className={style['nav-brand']}>
          <h2>Forum anak IT</h2>
          { showNavToggle && <div className={style['nav-toggle']}>
            <button onClick={onToggleNav}><FaBars/></button>
          </div> }
        </div>    
        { (showNavBar || toggleNav) &&
        <nav className={style.navbar}>
          <div className={style['search-container']}>
            <input className={style.searchbox} type='search' name='search' placeholder='Search'></input>
            <i className={style['fa-search']}><FaSearch /></i>
          </div>
          <div className={style['nav-menu']}>
            <div className={style['dropdown']}>
              <button className={style.dropbtn}>Categories</button>
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
        </nav> }
      </div>
    </header>
  )
}

export default Header
