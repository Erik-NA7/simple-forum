import { useState } from 'react';
import WindowClose from '../Icons/WindowClose';
import Modal from 'react-modal'
import style from './Form.module.css'

const Login = (props) => {
  const [ email, setEmail ] = useState('')
  const [ emailIsTouched, setEmailIsTouched ] = useState(false)
  const [ emailIsValid, setEmailIsValid ] = useState(false)
  const [ password, setPassword ] = useState('')
  const [ passwordIsTouched, setPasswordIsTouched ] = useState(false)
  const [ passwordIsValid,  setPasswordIsValid ] = useState(false)
  const [ emailInputClass, setEmailInputClass] = useState(style['form-control'])
  const [ passwordInputClass, setPasswordInputClass] = useState(style['form-control'])

  const checkEmail = (value) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
  }

  const invalidClass = (setState) => {
    setState(`${style['form-control']} ${style['invalid']}`)
  }

  const validClass = (setState) => {
    setState(`${style['form-control']} ${style['valid']}`)
  }

  const resetClass = () => {
    setEmailInputClass(style['form-control'])
    setPasswordInputClass(style['form-control'])
  }

  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
    if (!checkEmail(e.target.value)) {
      setEmailIsValid(false)
      if (emailIsTouched) {
        invalidClass(setEmailInputClass)
      } 
    } else {
      setEmailIsValid(true)
      if (emailIsTouched) {
        validClass(setEmailInputClass)
      }
    }
  }

  const paswordChangeHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.trim() !== '') {
      setPasswordIsValid(true)
      if (passwordIsTouched) {
        validClass(setPasswordInputClass)
      }
    } else {
      setPasswordIsValid(false)
      if (passwordIsTouched) {
        invalidClass(setPasswordInputClass)
      }
    }
  }

  const onEmailBlurHandler = (e) => {
    setEmailIsTouched(true)
    if (!emailIsValid) {
      invalidClass(setEmailInputClass)
    } else {
      validClass(setEmailInputClass)
    }
  }

  const onPaswordBlurHandler = (e) => {
    setPasswordIsTouched(true)
    if (!passwordIsValid) {
      invalidClass(setPasswordInputClass)
    } else {
      validClass(setPasswordInputClass)
    }
  }

  let formIsValid = false
  
  if (emailIsValid && passwordIsValid) {
    formIsValid = true
  }

  const onSubmitHandler = event => {
    event.preventDefault()
    
    if (!formIsValid) {
      setEmailIsTouched(true)
      setPasswordIsTouched(true)
      invalidClass(setEmailInputClass)
      invalidClass(setPasswordInputClass)
      return
    }

    setEmail('')
    setEmailIsValid(false)
    setEmailIsTouched(false)
    setPassword('')
    setPasswordIsValid(false)
    setPasswordIsTouched(false)
    resetClass()
  }
  
  return (
    <Modal
      className={{
        base: 'formModalContent',
        afterOpen: 'formModalContent',
        beforeClose: 'formModalContentClose'
      }}
      overlayClassName={{
        base: 'formModalOverlay',
        afterOpen: 'formModalOverlay',
        beforeClose: 'formModalOverlayClose'
      }}
      onRequestClose={props.onReqestClose}
      isOpen={props.isOpen}
      closeTimeoutMS={790}>
        <div className={style['login-form-container']}>
          <div className={style['close-modal']}>
            <WindowClose onClose={props.onClose}/>
          </div>
          <form className={style['login-form']} onSubmit={onSubmitHandler}>
            <h2>Login</h2>
            <div className={emailInputClass}>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='l-email'
                value={email}
                onChange={emailChangeHandler}
                onBlur={onEmailBlurHandler} />
              {!emailIsValid && emailIsTouched && <p className={style['error-text']}>Format email salah</p>}
            </div>
            <div className={passwordInputClass}>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='l-password'
                value={password}
                onChange={paswordChangeHandler}
                onBlur={onPaswordBlurHandler} />
              {!passwordIsValid && passwordIsTouched && <p className={style['error-text']}>Wajib diisi</p>}
            </div>
            <div className={style['form-actions']}>
              <button type='submit'>Login</button>
            </div>
          </form>
      </div>
    </Modal>
  );
};

export default Login;
