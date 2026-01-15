import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

// Pages
import FormPage from "./pages/FormPage";
import Counter from "./pages/Counter";
import Todo from "./pages/Todo";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          Form
        </NavLink>
        <NavLink to="/counter" className={({ isActive }) => isActive ? "active" : ""}>
          Counter
        </NavLink>
        <NavLink to="/todo" className={({ isActive }) => isActive ? "active" : ""}>
          Todo
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
