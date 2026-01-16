import { TodoType } from "../pages/Todo";

type Props = {
  todo: TodoType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className="task-item">
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} className="delete-btn">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
