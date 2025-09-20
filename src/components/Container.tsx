import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`max-w-4xl w-full mx-auto py-10 px-4 sm:px-6 md:px-10`}>
      {children}
    </main>
  );
};
