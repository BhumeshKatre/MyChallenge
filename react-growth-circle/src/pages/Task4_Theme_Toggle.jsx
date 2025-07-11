import React from "react";
import { useTheme } from "../context/ThemeContext";
import Navbar from "../Components/Navbar";

const Task4_ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <>
      <Navbar />
      <div
        className={`min-h-screen p-6 transition-all duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <p className="mt-6 text-lg">
          Current theme:{" "}
          <span className="font-semibold">
            {darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}
          </span>
        </p>
      </div>
    </>
  );
};

export default Task4_ThemeToggle;
