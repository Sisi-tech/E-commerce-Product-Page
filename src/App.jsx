import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import useLocalStorage from './local-storage';
import './index.css'
import TreeView from "./components/menu/";
import menus from "./components/menu/data";
import LoadImg from './components/load-img';

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className={`main-container ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <div className='header'>
        <TreeView menus={menus}/>
        <button onClick={handleToggleTheme} className="toggle-theme-btn">
          {
            theme === "dark" ? (
              <FontAwesomeIcon icon={faSun} color="white" className='md:text-2xl sm:text-xl' />
            ) : (
              <FontAwesomeIcon icon={faMoon} color="gray" className='md:text-2xl sm:text-xl' />
            )
          }
        </button>
      </div>
      <div className='load-img-container'>
        <LoadImg />
      </div>
    </div>
  );
  
}

export default App;
