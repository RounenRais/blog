"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Butona basınca aşağı kayma animasyonu
  const handleClick = () => {
    setClicked(true);
    setTheme(theme === "dark" ? "light" : "dark");

    // kısa bir "scroll down" hareketi
    window.scrollTo({
      behavior: "smooth",
    });

    // animasyon sonrası durumu sıfırla
    setTimeout(() => setClicked(false), 500);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleClick}
      className={`transition-transform duration-300 ${
        clicked ? "translate-y-2" : "translate-y-0"
      }`}
      aria-label="Tema değiştir"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
