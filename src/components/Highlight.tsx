import { cn } from "@/lib/utils";
import React from "react";

export const Highlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className={cn("bg-neutral-100 dark:bg-zinc-800 text-neutral-900 dark:text-zinc-100 px-1.5 py-0.5 rounded-md font-medium transition-colors", className)}>
      {children}
    </span>
  );
};

