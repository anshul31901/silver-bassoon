import React from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';

import './components/styles.css';

function App() {
  return (
    <div className='todo-container'>
      <Header title='Todoi App'/>
      <TodoItem text='eat'/>
      <TodoItem text='code' completed = {true}/>
      <TodoItem text='sleep'/>
      <TodoItem text='repeat'/>
      <Button/>

    </div>
  );
}

export default App;
