import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
