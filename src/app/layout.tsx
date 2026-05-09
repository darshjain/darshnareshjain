import { FloatingHeader } from "@/components/FloatingHeader";
import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";
import { cn } from "@/lib/utils";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter", // keeping variable name to avoid changing global css
});

export const metadata: Metadata = {
  title: "Darsh Jain - AI/ML Engineer & Full Stack Developer",
  description:
    "Darsh Jain is an AI/ML engineer and full stack developer with an M.S. in Computer Science from the University of Virginia (GPA: 3.94). Specializing in Large Language Models, RAG systems, and modern AI frameworks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          jakarta.variable,
          "min-h-screen bg-white dark:bg-zinc-950 font-sans antialiased"
        )}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <FloatingHeader />
            <main className="flex-1 pt-24 pb-12">
              <div className="mx-auto max-w-5xl px-6">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
