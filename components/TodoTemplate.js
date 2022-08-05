import React from 'react';
import './TodoTemplate.css';
import mImg from '../images/me-bg.png';
import {AiOutlineTwitter, AiOutlineInstagram, AiFillGithub} from 'react-icons/ai';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">Diary
      <img className='imwidth' src={mImg} alt='memo'/>
      </div>
      <div className="content">{children}</div>
      <div className="app-footer">Daily v1.0 - AHREUM
       <span>&nbsp;</span>
       <AiOutlineTwitter/> <AiOutlineInstagram/> <AiFillGithub/>
      </div>
    </div>
  );
};

export default TodoTemplate;
