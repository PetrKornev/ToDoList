import { useState } from 'react';

const InputGroup = ({ task, setTask }) => {
  const [newTask, addNewTask] = useState('');

  const handleChange = (e) => {
    addNewTask(e.target.value);
  };

  const keyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const handleClick = () => {
    if (newTask.length !== 0 && newTask.trim() === newTask) {
      setTask(() => [
        ...task,
        { id: ++task.length, nameTask: newTask, isCompleted: false },
      ]);
      addNewTask('');
    } else {
      addNewTask('');
    }
  };

  return (
    <>
      <input
        placeholder="Введи задачу"
        type="text"
        name="task"
        onChange={handleChange}
        value={newTask}
        onKeyDown={keyDown}
      />
      <button onClick={handleClick}>Добавить</button>
      <p>Нельзя добавить пустую задачу</p>
    </>
  );
};

export default InputGroup;
