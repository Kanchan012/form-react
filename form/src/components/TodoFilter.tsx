type Filter = "all" | "completed" | "incomplete";
type Props = {
  filter: string;
  setFilter: (value: Filter) => void;
};

function TodoFilter({ filter, setFilter }: Props) {
  return (
    <div className="todo-filter">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button
        className={filter === "incomplete" ? "active" : ""}
        onClick={() => setFilter("incomplete")}
      >
        Incomplete
      </button>
    </div>
  );
}

export default TodoFilter;
