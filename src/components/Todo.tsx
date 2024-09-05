import { TodoProps } from "../interfaces/interfaces";

const Todo: React.FC<TodoProps> = ({
  id,
  title,
  completed,
  handleRemove,
  handleCompleted,
}) => {
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={(e) => handleCompleted(id, ( e.target.checked))}
      />
      <label htmlFor="">{title}</label>
      <button className="destroy" onClick={() => handleRemove(id)} />
    </div>
  );
};

export default Todo;
