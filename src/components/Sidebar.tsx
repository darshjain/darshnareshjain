"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { Badge } from "./Badge";
import { AnimatePresence, motion } from "framer-motion";
import { IconLayoutSidebarRightCollapse, IconDownload, IconX } from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";

export const Sidebar = () => {
  const [open, setOpen] = useState(isMobile() ? false : true);

  return (
    <>
      {/* Mobile backdrop overlay */}
      <AnimatePresence>
        {open && isMobile() && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-[90] lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <div className="px-6 py-10 bg-neutral-100 w-fit h-screen flex flex-col justify-between">
          <div className="flex-1 overflow-auto">
            <SidebarHeader />
            <Navigation setOpen={setOpen} />
          </div>
          <div className="space-y-3 mt-4">
            <Badge href="/resume" text="Read Resume" />
            <DownloadResumeButton />
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {open && isMobile() && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-4 left-4 right-4 z-[100] bg-white rounded-2xl shadow-2xl border border-neutral-200 max-h-[calc(100vh-2rem)] overflow-hidden flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-end p-4 pb-0">
              <button
                onClick={() => setOpen(false)}
                className="h-8 w-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors duration-200"
                aria-label="Close navigation menu"
              >
                <IconX className="h-4 w-4 text-neutral-600" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 pb-6">
              <SidebarHeader />
              <Navigation setOpen={setOpen} />
            </div>

            {/* Fixed bottom section */}
            <div className="p-6 pt-0 space-y-3 border-t border-neutral-100 bg-white">
              <Badge href="/resume" text="Read Resume" />
              <DownloadResumeButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu button */}
      <button
        className="fixed lg:hidden top-4 right-4 h-12 w-12 border border-neutral-200 rounded-full backdrop-blur-sm flex items-center justify-center z-50 bg-white shadow-lg hover:shadow-xl transition-shadow duration-200"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
      >
        <IconLayoutSidebarRightCollapse className="h-6 w-6 text-secondary" />
      </button>
    </>
  );
};

export const Navigation = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-col space-y-1 my-2 relative z-[100]">
      {navlinks.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => isMobile() && setOpen(false)}
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-3 py-2.5 px-3 rounded-lg text-sm font-medium min-h-[40px]",
            isActive(link.href) && "bg-neutral-100 text-primary"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}

      <Heading as="p" className="text-sm pt-3 px-3 font-semibold text-neutral-600">
        Socials
      </Heading>
      {socials.map((link: Navlink) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={twMerge(
            "text-secondary hover:text-primary transition duration-200 flex items-center space-x-3 py-2.5 px-3 rounded-lg text-sm font-medium min-h-[40px]"
          )}
        >
          <link.icon
            className={twMerge(
              "h-4 w-4 flex-shrink-0",
              isActive(link.href) && "text-sky-500"
            )}
          />
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="flex space-x-3 mb-3">
      <Image
        src="/profile.png"
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <div className="flex text-sm flex-col justify-center min-w-0 flex-1">
        <p className="font-bold text-primary text-sm truncate">Darsh Naresh Jain</p>
        <p className="font-medium text-secondary text-xs">Developer</p>
        <p className="font-light text-secondary text-xs">Palo Alto, CA</p>
      </div>
    </div>
  );
};

const DownloadResumeButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/DarshJainResume.pdf';
    link.download = 'DarshJainResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-slate-900 group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block w-full min-h-[40px]"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative flex space-x-2 items-center justify-center z-10 rounded-full bg-transparent py-2.5 px-4 ring-1 ring-white/10">
        <IconDownload className="h-4 w-4" />
        <span className="text-xs">Download Resume</span>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    </button>
  );
};
