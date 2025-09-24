const CounterAndTrashButton = ({ task, setTask }) => {
  const trashCompletedTask = () => {
    setTask((prev) => prev.filter((item) => !item.isCompleted));
  };
  return (
    <div className="counter-trash-container">
      <span>Осталось дел: {task.length} </span>
      <button className="filter-btn" onClick={() => trashCompletedTask()}>
        Очистить выполненные
      </button>
    </div>
  );
};

export default CounterAndTrashButton;
