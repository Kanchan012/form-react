import { useState, useEffect, useMemo, useCallback } from "react";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import TodoFilter from "../components/TodoFilter";
import "./Todo.css";

export type TodoType = {
  id: number;
  text: string;
  completed: boolean;
};

function Todo() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">("all");

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved)  );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback((text: string) => {
    setTodos(prev => [
      ...prev,
      { id: Date.now(), text, completed: false },
    ]);
  }, []);

  const toggleTodo = useCallback((id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const filteredTodos = useMemo(() => {
    if (filter === "completed") return todos.filter(t => t.completed);
    if (filter === "incomplete") return todos.filter(t => !t.completed); 
    return todos;
  }, [todos, filter]);

  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <TodoInput onAdd={addTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      {filteredTodos.length === 0 ? (
        <p className="empty-msg">No tasks</p>
      ) : (
        <ul className="task-list">
          {filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;
