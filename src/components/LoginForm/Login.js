import useInput from '../../hooks/use-reducer-input';
import style from './Login.module.css'

const BasicForm = (props) => {

  const isNotEmpty = value => value.trim() !== ''
  const isEmail = value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmail);
  
  const {
    value: passWord,
    isValid: passWordIsValid,
    hasError: passWordInputHasError,
    inputChangeHandler: passWordChangeHandler,
    inputBlurHandler: passWordBlurHandler,
    reset: resetPassWord
  } = useInput(isNotEmpty);

  

  let formIsValid =false
 
  if (passWordIsValid && emailIsValid) {
    formIsValid = true
  }

  const emailInputClass = emailInputHasError ? style['form-control invalid'] : style['form-control']
  const passWordInputClass = passWordInputHasError ? style['form-control invalid'] : style['form-control']

  const onSubmitHandler = event => {
    event.preventDefault()

    if (!emailIsValid && !passWordIsValid) {
      return
    }

    resetPassWord()
    resetEmail()
  }
  
  return (
    <div className={style['login-form-container']}>
      <p className={style['close-modal']}><span onClick={props.onClose}>x</span></p>
      <form className={style['login-form']} onSubmit={onSubmitHandler}>
        <div className={emailInputClass}>
          <label htmlFor='name'>Email</label>
          <input
            type='email'
            id='name'
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler} />
          {emailInputHasError && <p>Format email salah</p>}
        </div>
        <div className={passWordInputClass}>
          <label htmlFor='name'>Password</label>
          <input
            type='text'
            id='name'
            value={passWord}
            onChange={passWordChangeHandler}
            onBlur={passWordBlurHandler} />
          {passWordInputHasError && <p>Wajib diisi</p>}
        </div>
        <div className='form-actions'>
          <button disabled={!formIsValid}>Login</button>
        </div>
      </form>
    </div>

  );
};

export default BasicForm;
