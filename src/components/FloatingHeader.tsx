"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navlinks } from "@/constants/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export const FloatingHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-4 pt-4 pb-2",
        scrolled ? "translate-y-0" : "translate-y-0"
      )}
    >
      <nav className="max-w-4xl mx-auto">
        <div
          className={cn(
            "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
            scrolled 
              ? "glass shadow-lg border-neutral-200/50 dark:border-white/10 shadow-black/5" 
              : "bg-transparent border-transparent"
          )}
        >
          {/* Logo/Name */}
          <Link href="/" className="font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
            <span className="text-neutral-900 dark:text-white">Darsh</span>
            <span className="text-secondary ml-1 hidden sm:inline">Jain</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navlinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
                    isActive 
                      ? "text-neutral-900 dark:text-white" 
                      : "text-secondary hover:text-neutral-900 dark:hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-neutral-100 dark:bg-zinc-800 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
            <div className="h-6 w-px bg-neutral-200 dark:bg-zinc-800 mx-2" />
            <ThemeToggle />
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-neutral-100 dark:bg-zinc-800 text-neutral-900 dark:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <IconX className="h-5 w-5" /> : <IconMenu2 className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-20 left-4 right-4 p-4 glass rounded-3xl shadow-2xl md:hidden border-neutral-200/50 dark:border-white/10"
            >
              <div className="flex flex-col space-y-2">
                {navlinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-2xl text-base font-medium flex items-center space-x-3 transition-colors",
                      pathname === link.href 
                        ? "bg-neutral-100 dark:bg-zinc-800 text-neutral-900 dark:text-white" 
                        : "text-secondary hover:bg-neutral-50 dark:hover:bg-zinc-900/50"
                    )}
                  >
                    <link.icon className="h-5 w-5" />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
