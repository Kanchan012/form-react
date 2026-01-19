import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button onClick={toggleTheme}>
            Switch to {theme === "light" ? "dark" : "light"} 
        </button>
    );
}

export default ThemeToggle;