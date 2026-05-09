"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IconSun, IconMoon } from "@tabler/icons-react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="p-3 h-10 w-10" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2.5 rounded-full hover:bg-neutral-100 dark:hover:bg-zinc-800 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <IconSun className="h-5 w-5 text-yellow-500" />
      ) : (
        <IconMoon className="h-5 w-5 text-neutral-600" />
      )}
    </button>
  );
};
