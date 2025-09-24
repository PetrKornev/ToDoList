import { useState } from 'react';

const Tasks = ({ item, taskCompleted, deleteTask, setTask }) => {
  const [showInput, setShowInput] = useState(false);
  const [editTask, setEditTask] = useState(item.nameTask);

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
    <li className="todo-item">
      <label className={`task-label ${item.isCompleted ? 'completed' : ''}`}>
        <input
          type="checkbox"
          checked={item.isCompleted}
          onChange={() => taskCompleted(item.id)}
        />
        {showInput ? (
          <input
            className="task-edit-input"
            value={editTask}
            onChange={edit}
            onKeyDown={onKey}
          />
        ) : (
          <span>{item.nameTask}</span>
        )}
      </label>
      <div className="task-actions">
        <button className="edit-btn" onClick={() => setShowInput(!showInput)}>
          Изменить
        </button>
        <button className="delete-btn" onClick={() => deleteTask(item.id)}>
          Удалить задачу
        </button>
      </div>
    </li>
  );
};

export default Tasks;
