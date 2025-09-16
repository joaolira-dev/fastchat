import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "light") {
      setIsLightMode(true);
      document.documentElement.classList.add("light");
    } else {
      setIsLightMode(false);
      document.documentElement.classList.remove("light");
    }
  }, []);

  const handleToggle = () => {
    const newIsLightMode = !isLightMode;
    setIsLightMode(newIsLightMode);

    if (newIsLightMode) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="cursor-pointer fixed top-4 right-5 z-50 p-2 rounded-full bg-primary text-primary-foreground shadow-md hover:scale-105 transition"
    >
      {isLightMode ? <Moon className="h-6 w-6 text-black" /> : <Sun className="h-6 w-6" />}
    </button>
  );
};
