
import WindowClose from '../Icons/WindowClose'
import Modal from 'react-modal'
import style from './Mobilenav.module.css'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'

function MobileNav(props) {

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
  
  return (
    <Modal
      className={{
        base: 'mobilenavContent',
        afterOpen: 'mobilenavContent',
        beforeClose: 'mobilenavOnCloseContent'
      }}
      overlayClassName={{
        base: 'mobilenavOverlay',
        afterOpen: 'mobilenavOverlay',
        beforeClose: 'mobilenavOverlay'
      }}
      isOpen={props.isOpen}
      onRequestClose={props.onReqToggleNav}
      closeTimeoutMS={790}>
        <div className={style['mobile-nav']}>
          <WindowClose onClose={props.onClose}/>
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
      </div >
    </Modal>
  )
}

export default MobileNav