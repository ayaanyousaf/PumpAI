import { useState, useEffect } from "react";
import Moon from "../assets/Moon.svg";
import Sun from "../assets/Sun.svg"; 

function DarkModeToggle() {
  const [theme, setTheme] = useState("light"); // light theme by default

  // toggle function
  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light"; 

    setTheme(newTheme); 
    document.documentElement.classList.toggle("dark", newTheme === "dark"); 

    // Save theme in local storage
    localStorage.setItem("theme", newTheme); 
  }; 

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme); 
    document.documentElement.classList.toggle("dark", storedTheme === "dark"); 
  }, []); 

  // Button UI 
  return (
    <button 
      onClick={toggle} 
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center gap-2 rounded-full p-2 shadow-md bg-gray-200 dark:bg-white 
                 text-white hover:opacity-90 cursor-pointer transition-all ease-in-out"
    >
      {theme === 'dark'
        ? <img src={Sun} alt="Light mode" className="h-5 w-5" />
        : <img src={Moon} alt="Dark mode" className="h-5 w-5" />}
    </button>
  ); 
}

export default DarkModeToggle; 