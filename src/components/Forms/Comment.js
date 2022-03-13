import { useState } from 'react';
import style from './Form.module.css';

const Comment = (props) => {

  const [ nameIsTouched, setNameIsTouched ] = useState(false);
  const [ nameIsValid, setNameIsValid ] = useState(false);

  const [ email, setEmail ] = useState('');
  const [ emailIsTouched, setEmailIsTouched ] = useState(false);
  const [ emailIsValid, setEmailIsValid ] = useState(false);

  const commentObj = {
    id: "fa1ca3c1-cc1e-4ed9-86b8-f60d8312d499",
    author: "",
    avatar: "https://avatars.dicebear.com/api/avataaars/user.svg",
    date: new Date(),
    message: "",
    point: 0,
    replies: []
  };

  const [ commentIsTouched, setCommentIsTouched ] = useState(false);
  const [ commentIsValid,  setCommentIsValid ] = useState(false);

  const [ newComment, setNewComment ] = useState(commentObj);

  const [ nameInputClass, setNameInputClass] = useState(style['form-control']);
  const [ emailInputClass, setEmailInputClass] = useState(style['form-control']);
  const [ commentInputClass, setCommentInputClass] = useState(style['form-control']);

  const checkEmail = (value) => {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
  }

  const invalidClass = (setState) => {
    setState(`${style['form-control']} ${style['invalid']}`);
  }

  const validClass = (setState) => {
    setState(`${style['form-control']} ${style['valid']}`);
  }

  const resetClass = () => {
    setNameInputClass(style['form-control']);
    setEmailInputClass(style['form-control']);
    setCommentInputClass(style['form-control']);
  };

  const nameChangeHandler = (e) => {
    setNewComment({
      ...newComment,
      author: e.target.value,
    })
    if (e.target.value !== '') {
      setNameIsValid(true);
      if (nameIsTouched) {
        validClass(setNameInputClass);
      }; 
    } else {
      setNameIsValid(false);
      if (nameIsTouched) {
        invalidClass(setNameInputClass);
      };
    };
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    if (!checkEmail(e.target.value)) {
      setEmailIsValid(false);
      if (emailIsTouched) {
        invalidClass(setEmailInputClass);
      }; 
    } else {
      setEmailIsValid(true);
      if (emailIsTouched) {
        validClass(setEmailInputClass);
      };
    };
  };

  const commentChangeHandler = (e) => {
    setNewComment({
      ...newComment,
      message: e.target.value,
    });
    if (e.target.value !== '') {
      setCommentIsValid(true);
      if (commentIsTouched) {
        validClass(setCommentInputClass);
      };
    } else {
      setCommentIsValid(false);
      if (commentIsTouched) {
        invalidClass(setCommentInputClass);
      };
    };
  };

  const onNameBlurHandler = (e) => {
    setNameIsTouched(true);
    if (!nameIsValid) {
      invalidClass(setNameInputClass);
    } else {
      validClass(setNameInputClass);
    };
  };

  const onEmailBlurHandler = (e) => {
    setEmailIsTouched(true);
    if (!emailIsValid) {
      invalidClass(setEmailInputClass);
    } else {
      validClass(setEmailInputClass);
    };
  };

  const onCommentBlurHandler = (e) => {
    setCommentIsTouched(true);
    if (!commentIsValid) {
      invalidClass(setCommentInputClass);
    } else {
      validClass(setCommentInputClass);
    };
  };

  let formIsValid = false;

  if (nameIsValid && emailIsValid && commentIsValid) {
    formIsValid = true;
  };

  const reset = () => {
    setNameIsValid(false);
    setNameIsTouched(false);
    setEmail('');
    setEmailIsValid(false);
    setEmailIsTouched(false);
    setCommentIsValid(false);
    setCommentIsTouched(false);
    resetClass();
    setNewComment(commentObj);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(newComment);
    if (!formIsValid) {
      setNameIsTouched(true);
      setEmailIsTouched(true);
      setCommentIsTouched(true);
      invalidClass(setNameInputClass);
      invalidClass(setEmailInputClass);
      invalidClass(setCommentInputClass);
      return;
    };
    reset();
  };
  
  return (
    <form className={style['comment-form']} onSubmit={onSubmitHandler}>
      <h3>Tambahkan komentar</h3>
      <div className={nameInputClass}>
        <input
          type='text'
          id='k-name'
          placeholder='Name'
          value={newComment.author}
          onChange={nameChangeHandler}
          onBlur={onNameBlurHandler} />
        {!nameIsValid && nameIsTouched && <p className={style['error-text']}>Wajib diisi</p>}
      </div>
      <div className={emailInputClass}>
        <input
          type='email'
          id='k-email'
          placeholder='Email'
          value={email}
          onChange={emailChangeHandler}
          onBlur={onEmailBlurHandler} />
        {!emailIsValid && emailIsTouched && <p className={style['error-text']}>Format email salah</p>}
      </div>
      <div className={commentInputClass}>
        <textarea
          type='komentar'
          id='komentar'
          placeholder='Komentar anda'
          value={newComment.message}
          onChange={commentChangeHandler}
          onBlur={onCommentBlurHandler}>
        </textarea>
        {!commentIsValid && commentIsTouched && <p className={style['error-text']}>Wajib diisi</p>}
      </div>
      <div className={style['comment-form-actions']}>
        <button className={style['reset-comment']} type='button' onClick={reset}>Reset</button>
        <button className={style['submit-comment']} type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default Comment;