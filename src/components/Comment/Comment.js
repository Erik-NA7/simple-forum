import { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import style from '../Post.module.css';

function Comment(props) {

  const arrowIconStyle = {
    width: '.9em', height: '.9em', strokeWidth: '30', margin: 'auto'
  };

  const [ upVoteClass, setUpVoteClass ] = useState(style['upvote-btn']);
  const [ downVoteClass, setDownVoteClass ] = useState(style['downvote-btn']);
  const [ hasVoted, setHasVoted ] = useState(false);

  const [points, setPoints] = useState(props.point);

  const pointsUp = () => {
    setPoints(points + 1);
    setUpVoteClass(style.upvoted);
    setHasVoted(true);
  };
  
  const pointsDown = () => {
    setPoints(points - 1);
    setDownVoteClass(style.downvoted);
    setHasVoted(true);
  };
  
  return (
    <div className={style.comment}>
      <div className={style.avatar}>
        <img src={props.avatar} alt='avatar'/>
      </div>
      <div className={style['comment-body']}>
        <p className={style['user-name']}>{props.author}</p>
        <p className={style.dateTime}>{props.date}</p>
        <p>{props.message}</p>
        <div className={style['vote-action']}>
          <p className={style.point}>{points} point</p>
          <button
            aria-label='upvote current post or comment'
            className={upVoteClass}
            onClick={pointsUp}
            disabled={hasVoted}>
            <FaArrowUp style={arrowIconStyle}/>
          </button>
          <button
            aria-label='downvote current post or comment'
            className={downVoteClass}
            onClick={pointsDown}
            disabled={hasVoted}>
            <FaArrowDown style={arrowIconStyle}/>
          </button>
        </div>
        {props.children}
      </div>
    </div>    
  );
};

export default Comment;