import styled, { keyframes } from 'styled-components'
import WindowClose from '../Icons/WindowClose'
import style from './Mobilenav.module.css'
import { FaSearch } from 'react-icons/fa'

const MobNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 90%;
  height: 100%;
  padding: 16px;
  background: var(--black);
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  animation-name: ${props => props.animate === 'entry' ? slideLeft : slideRight};
  animation-duration:  800ms;
`

const slideLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const slideRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`

export default function MobileNav(props) {
  return (
    <MobNav animate={props.animate} show={props.show}>
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
    </MobNav>
  )
} 