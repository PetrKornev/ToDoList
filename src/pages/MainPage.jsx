import { useState, useEffect } from 'react';
import TasksList from '../components/content/TasksList';
import InputGroup from '../components/buttonGroup/InputGroup';
import FilterButtonGroup from '../components/buttonGroup/FilterButtonGroup';
import CounterAndTrashButton from '../components/buttonGroup/CounterAndTrashButton';
import Header from '../components/header/Header';
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
