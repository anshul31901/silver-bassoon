import React from 'react';

const TodoItem = (props)=>{
    return (
        //jsx objects should have a common parent

        //conditional rendering : props.render a boolean value . if its true means todo is completed and kuch dikhana nahi
        //else checkbox dikha dena hai

        <li className='todo-item'>
            <span>
    
            {props.completed?<></>:<input type = "checkbox"/>}
            <span class="todo-item-text">{props.text}</span>
            </span>
            <span>...</span>

        </li>
    );
};

export default TodoItem;