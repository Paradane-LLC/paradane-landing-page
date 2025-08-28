"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LinkItem = ({ href, children }) => {
  return (
    <Link
      className="text-zinc-800 hover:scale-105 transition-all block"
      href={href}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 mt-3 md:mt-5 left-0 right-0 mx-2 sm:mx-6 box-border">
      <div className="bg-white/90 max-w-7xl mx-auto text-sm border border-[#00489c]/10 backdrop-blur shadow-lg rounded-3xl px-4 sm:px-10 h-16 md:h-20 w-full flex items-center justify-between box-border">
        <div className="flex items-center gap-10 ">
            <Link href="/" className="relative w-28 md:w-32 h-12 flex-shrink-0">
                <Image
                    src="https://cdn.paradane.com/images/logo.svg"
                    alt="Paradane Logo"
                    fill
                    className="object-contain"
                />
            </Link>
            <div className="hidden sm:flex gap-5 items-center">
                <LinkItem href="#">Services</LinkItem>
                <LinkItem href="#">Portfolio</LinkItem>
                <LinkItem href="#">Contact</LinkItem>
            </div>
        </div>

        <div className="hidden md:flex gap-10 items-center">
          <div className="flex gap-5 items-center">
            <LinkItem href="#">Legal</LinkItem>
            <LinkItem href="#">Book a Call</LinkItem>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden rounded-lg transition"
        >
          {!menuOpen && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-zinc-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}

          {menuOpen && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-zinc-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 bg-white border border-zinc-200 rounded-2xl shadow-lg p-5 space-y-4 text-sm max-w-7xl mx-auto">
          <LinkItem href="#">Services</LinkItem>
          <LinkItem href="#">Portfolio</LinkItem>
          <LinkItem href="#">Contact</LinkItem>
          <div className="border-t border-zinc-200 pt-4 space-y-4">
            <LinkItem href="#">Legal</LinkItem>
            <LinkItem href="#">Book a Call</LinkItem>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
