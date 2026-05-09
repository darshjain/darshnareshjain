import { cn } from "@/lib/utils";
import React from "react";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const CalSans = localFont({
  src: [{ path: "../../fonts/CalSans-SemiBold.woff2" }],
  display: "swap",
});

export const Heading = ({
  className,
  children,
  as: Tag = "h1",
}: {
  className?: string;
  children: React.ReactNode;
  as?: any;
}) => {
  return (
    <Tag
      className={cn(
        CalSans.className,
        "text-xl md:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight",
        className
      )}
    >
      {children}
    </Tag>
  );
};
