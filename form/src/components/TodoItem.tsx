import  type { TodoType } from "../types/Todo";

type Props = {
  todo: TodoType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className="task-item">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
