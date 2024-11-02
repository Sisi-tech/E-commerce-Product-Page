import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import useLocalStorage from './local-storage';
import './index.css'

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div
      className={`main-container ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}
    >
      <button onClick={handleToggleTheme} className="toggle-theme-btn absolute top-8 right-10 bg-transparent border-none cursor-pointer">
        {
          theme === "dark" ? (
            <FontAwesomeIcon icon={faSun} color="yellow" />
          ) : (
            <FontAwesomeIcon icon={faMoon} color="gray" />
          )
        }
      </button>
    </div>
  );
  
}

export default App;
