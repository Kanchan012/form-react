import type { TodoType } from "../types/Todo";
import { useState, useRef, useEffect } from "react";

type Props = {
  todo: TodoType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, newText: string) => void;
};

function TodoItem({ todo, onToggle, onDelete, onUpdate }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const editRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) editRef.current?.focus();
  }, [isEditing]);

  const handleSave = () => {
    if (editText.trim() !== "") {
      onUpdate(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSave();
  };

  return (
    <li className="task-item">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {isEditing ? (
          <input
            ref={editRef}
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleEnter}
            className="edit-input"
          />
        ) : (
          <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
            {todo.text}
          </span>
        )}
      </label>

      {isEditing ? (
        <button onClick={handleSave} className="btn-save">Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)} className="btn-update">Update</button>
      )}

      <button onClick={() => onDelete(todo.id)} className="btn-delete">Delete</button>
    </li>
  );
}

export default TodoItem;
