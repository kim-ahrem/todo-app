import React from 'react';
import {  MdCheckBoxOutlineBlank,  MdCheckBox} from 'react-icons/md';
import {BsDash} from 'react-icons/bs';
import cn from 'classnames';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
      <BsDash className='icons'/>
      {/* <MdRemoveCircleOutline /> */}
      </div>
    </div>
  );
};

export default TodoListItem;
