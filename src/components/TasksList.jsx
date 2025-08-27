import { data } from '../utils/data';

const TasksList = () => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.task}</li>
      ))}
    </ul>
  );
};

export default TasksList;
