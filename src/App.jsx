import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import useLocalStorage from './local-storage';
import './index.css'
import TreeView from "./components/menu/";
import menus from "./components/menu/data";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className={`main-container ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <button onClick={handleToggleTheme} className="toggle-theme-btn absolute p-4 right-4 bg-transparent border-none cursor-pointer">
        {
          theme === "dark" ? (
            <FontAwesomeIcon icon={faSun} color="yellow" className='md:text-2xl sm:text-xl' />
          ) : (
            <FontAwesomeIcon icon={faMoon} color="gray" className='md:text-2xl sm:text-xl' />
          )
        }
      </button>
      <TreeView menus={menus}/>
    </div>
  );
  
}

export default App;
