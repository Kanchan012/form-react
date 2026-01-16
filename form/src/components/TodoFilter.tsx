type Props = {
  filter: string;
  setFilter: (value: "all" | "completed" | "incomplete") => void;
};

function TodoFilter({ filter, setFilter }: Props) {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>All</button>
      <button onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>Completed</button>
      <button onClick={() => setFilter("incomplete")} className={filter === "incomplete" ? "active" : ""}>Incomplete</button>
    </div>
  );
}

export default TodoFilter;
