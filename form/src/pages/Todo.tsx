import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");        
  const [tasks, setTasks] = useState<string[]>([]);  
  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask(""); 
    }
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ol>
          {tasks.map((t, i) => (
            <li key={i}>
              {t} <button onClick={() => deleteTask(i)}>Delete</button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default Todo;
