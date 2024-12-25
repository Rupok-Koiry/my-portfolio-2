import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from local storage or default to 'system'
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "system";
  });

  useEffect(() => {
    // Apply the theme when it changes and save to local storage
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      // For 'system', check user's preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  const darkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  const lightIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );

  return (
    <button
      className="flex h-8 w-16 items-center rounded-full bg-white shadow-lg transition duration-300 focus:outline-none"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div
        className={`relative h-9 w-9 transform rounded-full p-1 text-white transition duration-500 ${
          theme === "dark"
            ? "translate-x-full bg-gray-800"
            : "-translate-x-2 bg-yellow-600"
        }`}
      >
        {theme === "dark" ? darkIcon : lightIcon}
      </div>
    </button>
  );
};

export default ThemeToggle;