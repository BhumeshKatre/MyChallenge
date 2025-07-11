import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";

const Navbar = () => {
  const { toggleTheme, darkMode } = useTheme();

  return (
    <header
      className={`flex p-5 justify-between items-center shadow-md  
        ${darkMode? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div>
        <h1>My Challengs</h1>
      </div>
      <div>
        <button
          onClick={toggleTheme}
          className={`px-6 py-2 rounded text-white transition ${
            darkMode
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
