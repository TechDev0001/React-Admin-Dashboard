import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
      <div className="flex items-center gap-4">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun className="text-yellow-300" /> : <Moon className="text-gray-800" />}
        </button>
        <img src="/admin_img.png" alt="avatar" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;
