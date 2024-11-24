import useTheme from "@/hooks/useTheme.js";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      <span className="dark:hidden block">
        <FiSun className="size-6" />
      </span>
      <span className="hidden dark:block">
        <FiMoon className="size-6 text-light" />
      </span>
    </button>
  );
};

export default ThemeToggle;