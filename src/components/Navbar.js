import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [isOpen, setItem] = useState(false);
  const user = JSON.parse(localStorage.getItem("auth_token"));
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  useEffect(() => {
    if (theme === "system") {
      const osTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      document.documentElement.classList.add(osTheme);
    } else {
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    window.location.href = "/";
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Auth-CRUD App</div>
        <div className="relative flex items-center">
          <button
            onClick={toggleTheme}
            className="text-white focus:outline-none mr-4"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {user?.username}
          </button>
          {isOpen && <Dropdown handleLogout={handleLogout} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
