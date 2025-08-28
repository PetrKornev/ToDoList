import { useState } from 'react';

const List = ({ item, taskCompleted, deleteTask, setTask }) => {
  const [showInput, setShowInput] = useState(true);
  const [editTask, setEditTask] = useState(item.nameTask);
  console.log(editTask);

  const edit = (e) => {
    setEditTask(e.target.value);
  };

  const addEditTask = () => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === item.id ? { ...task, nameTask: editTask } : task
      )
    );
    setShowInput(!showInput);
  };

  const onKey = (e) => {
    if (e.key === 'Enter') {
      addEditTask();
    }
  };

  return (
    <>
      <li
        key={item.id}
        style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}
      >
        <input
          type="checkbox"
          checked={item.isCompleted}
          onChange={() => taskCompleted(item.id)}
        />
        {showInput ? (
          item.nameTask
        ) : (
          <input value={editTask} onChange={edit} onKeyDown={onKey} />
        )}
        <button onClick={() => setShowInput(!showInput)}>Изменить</button>
        <button onClick={() => deleteTask(item.id)}>Удалить задачу</button>
      </li>
    </>
  );
};

export default List;
