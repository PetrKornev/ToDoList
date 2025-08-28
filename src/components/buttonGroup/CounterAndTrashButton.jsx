const CounterAndTrashButton = ({ task, setTask }) => {
  const trashCompletedTask = () => {
    setTask((prev) => prev.filter((item) => !item.isCompleted));
  };
  return (
    <>
      <div>Осталось дел: {task.length} </div>
      <button onClick={() => trashCompletedTask()}>Очистить выполненные</button>
    </>
  );
};

export default CounterAndTrashButton;
