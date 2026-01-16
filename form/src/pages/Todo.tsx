import { useState, useEffect, useMemo, useCallback } from "react";
import TodoInput from "../components/TodoInput";
import "./Todo.css";

export type TodoType = {
  id: number;
  text: string;
  completed: boolean;
};

function Todo() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">("all");

  /* useEffect: load from localStorage */
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved)as TodoType[]);
    }
  }, []);

  /* useEffect: save to localStorage */
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  /* useCallback: add todo */
  const addTodo = useCallback((text: string) => {
    setTodos(prev => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ]);
  }, []);

  /* useCallback: toggle complete */
  const toggleTodo = useCallback((id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  /* useCallback: delete */
  const deleteTodo = useCallback((id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  /* useMemo: filtered todos */
  const filteredTodos = useMemo(() => {
    if (filter === "completed") {
      return todos.filter(t => t.completed);
    }
    if (filter === "incomplete") {
      return todos.filter(t => !t.completed);
    }
    return todos;
  }, [todos, filter]);

  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <TodoInput onAdd={addTodo} />
      {filteredTodos.length === 0 ? (
        <p className="empty-msg">No tasks</p>
      ) : (
        <ul className="task-list">
          {filteredTodos.map(todo => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;
