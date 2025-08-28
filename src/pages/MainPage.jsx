import { useState } from 'react';
import TasksList from '../components/content/TasksList';
import InputGroup from '../components/buttonGroup/InputGroup';
import FilterButtonGroup from '../components/buttonGroup/FilterButtonGroup';
import CounterAndTrashButton from '../components/buttonGroup/CounterAndTrashButton';
import Header from '../components/header/Header';
import './App.css';

function MainPage() {
  const [task, setTask] = useState([]);
  const [status, setStatus] = useState('all');

  return (
    <>
      <Header />
      <InputGroup task={task} setTask={setTask} />
      <TasksList task={task} setTask={setTask} status={status} />
      <FilterButtonGroup setStatus={setStatus} />
      <CounterAndTrashButton task={task} setTask={setTask} />
    </>
  );
}

export default MainPage;
