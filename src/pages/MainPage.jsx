import { useState, useEffect } from 'react';
import TasksList from '../components/TasksList';
import InputGroup from '../components/InputGroup';
import FilterButtonGroup from '../components/FilterButtonGroup';
import CounterAndTrashButton from '../components/CounterAndTrashButton';
import Header from '../components/Header';
import './App.css';

function MainPage() {
  const [task, setTask] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [status, setStatus] = useState('all');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(task));
  }, [task]);

  return (
    <div className="todo-container">
      <Header />
      <InputGroup task={task} setTask={setTask} />
      <TasksList task={task} setTask={setTask} status={status} />
      <FilterButtonGroup setStatus={setStatus} />
      <CounterAndTrashButton task={task} setTask={setTask} />
    </div>
  );
}

export default MainPage;
