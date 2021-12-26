import useInput from '../../hooks/use-reducer-input';
import style from './Register.module.css'

const BasicForm = (props) => {

  const isNotEmpty = value => value.trim() !== ''
  const isEmail = value => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput(isNotEmpty);

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
    reset: resetpassWord
  } = useInput(isNotEmpty);

  let formIsValid =false
 
  if (nameIsValid && emailIsValid && passWordIsValid ) {
    formIsValid = true
  }

  const emailInputClass = emailInputHasError ? style['form-control invalid'] : style['form-control']
  const nameInputClass = nameInputHasError ? style['form-control invalid'] : style['form-control']
  const passWordInputClass = passWordInputHasError ? style['form-control invalid'] : style['form-control']

  const onSubmitHandler = event => {
    event.preventDefault()

    if (!nameIsValid && !emailIsValid && !passWordIsValid) {
      return
    }

    resetName()
    resetpassWord()
    resetEmail()
  }
  
  return (
    <div className={style['login-form-container']}>
      <p className={style['close-modal']}><span onClick={props.onClose}>x</span></p>
      <form className={style['login-form']} onSubmit={onSubmitHandler}>
        <div className={nameInputClass}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler} />
          {emailInputHasError && <p>Entered email is invalid</p>}
        </div>
        <div className={emailInputClass}>
          <label htmlFor='name'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler} />
          {nameInputHasError && <p>Entered name is invalid</p>}
        </div>
        <div className={passWordInputClass}>
          <label htmlFor='name'>Password</label>
          <input
            type='text'
            id='name'
            value={passWord}
            onChange={passWordChangeHandler}
            onBlur={passWordBlurHandler} />
          {passWordInputHasError && <p>Last Name must not be empty</p>}
        </div>
        <div className='form-actions'>
          <button disabled={!formIsValid}>Create account</button>
        </div>
      </form>
    </div>

  );
};

export default BasicForm;
