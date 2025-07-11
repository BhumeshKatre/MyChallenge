import { createContext, useContext, useState } from "react";

// Create the context
const ThemeContext = createContext();

// Custom hook to access theme
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
