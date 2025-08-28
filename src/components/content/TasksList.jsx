import List from '../list/List';

const TasksList = ({ task, setTask, status }) => {
  const taskCompleted = (id) => {
    setTask((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const deleteTask = (id) => {
    setTask((prev) => prev.filter((item) => item.id !== id));
  };

  const filterTasks = task.filter((item) => {
    if (status === 'active') return !item.isCompleted;
    if (status === 'completed') return item.isCompleted;
    return true;
  });

  return (
    <ul>
      {filterTasks.map((item) => (
        <List
          key={item.id}
          item={item}
          taskCompleted={taskCompleted}
          deleteTask={deleteTask}
          setTask={setTask}
        />
      ))}
    </ul>
  );
};

export default TasksList;
