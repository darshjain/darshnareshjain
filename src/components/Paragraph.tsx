import { cn } from "@/lib/utils";
import React from "react";

export const Paragraph = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-sm lg:text-base font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
};
