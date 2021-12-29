import WindowClose from '../Icons/WindowClose'
import Modal from 'react-modal'
import style from './Mobilenav.module.css'
import { FaSearch } from 'react-icons/fa'

function MobileNav(props) {
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
          <div className={style['search-container']}>
            <input className={style.searchbox} type='search' name='search' placeholder='Search'></input>
            <div className={style['fa-search']}><FaSearch /></div>
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
      </div >
    </Modal>
  )
}

export default MobileNav