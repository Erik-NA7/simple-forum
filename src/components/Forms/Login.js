import { useState } from 'react';
import style from './Form.module.css'

const BasicForm = (props) => {
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
    if (e.target.value !== '') {
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

  const onSubmitHandler = event => {
    event.preventDefault()
    if (!emailIsValid && !passwordIsValid) {
      return
    }
    setEmail('')
    setPassword('')
    resetClass()
  }
  
  return (
    <div className={style['login-form-container']}>
      <p className={style['close-modal']}><span onClick={props.onClose}>x</span></p>
      <form className={style['login-form']} onSubmit={onSubmitHandler}>
        <h2>Login</h2>
        <div className={emailInputClass}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={emailChangeHandler}
            onBlur={onEmailBlurHandler} />
          {!emailIsValid && emailIsTouched && <p className={style['error-text']}>Format email salah</p>}
        </div>
        <div className={passwordInputClass}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={paswordChangeHandler}
            onBlur={onPaswordBlurHandler} />
          {!passwordIsValid && passwordIsTouched && <p className={style['error-text']}>Wajib diisi</p>}
        </div>
        <div className={style['form-actions']}>
          <button disabled={!emailIsValid && !passwordIsValid}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default BasicForm;
