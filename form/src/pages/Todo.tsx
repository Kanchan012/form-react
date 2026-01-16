import { useState, useEffect, useMemo, useCallback } from "react";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import TodoFilter from "../components/TodoFilter";
import type { TodoType } from "../types/Todo";
import "./Todo.css";

function Todo() {
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">("all");
  const [todos, setTodos] = useState<TodoType[]>(() => {
  const saved = localStorage.getItem("todos");
  if (saved) {
    try {
      return JSON.parse(saved) as TodoType[];
    } catch (e) {
      console.error("Failed to parse todos from localStorage:", e);
    }
  }
  return [];
});
 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  const addTodo = useCallback((text: string) => {
    setTodos(prev => [...prev,{ id: Date.now(), text, completed: false }]);
  }, []);

  const toggleTodo = useCallback((id: number) => {
    setTodos(prev =>
      prev.map(todo =>todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    );
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

    const updateTodo = useCallback((id: number, newText: string) => {
    setTodos(prev =>
      prev.map(todo => (todo.id === id ? { ...todo, text: newText } : todo))
    );
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
              onUpdate={updateTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;
