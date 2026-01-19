import { useTheme } from "../context/ThemeContext";
import "./ThemeToggle.css";
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className="slider" />
    </label>
  );
}

export default ThemeToggle;
