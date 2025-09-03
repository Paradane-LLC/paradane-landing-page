"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import BookerModal from "./BookerModal";
import Logo from "./Logo";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

const LinkItem = ({ href, children }) => {
  return (
    <Link
       className="hover:scale-105 transition-colors duration-500 ease-out block"
       href={href}
     >
      {children}
    </Link>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    const target = document.querySelector(".header-black-dynamic");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInverted(entry.isIntersecting),
      { threshold: 0, rootMargin: "-80px 0px -100% 0px" }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`fixed z-[999] mt-3 md:mt-5 left-0 right-0 mx-2 sm:mx-6 box-border transition-all duration-500 ease-out`}>
      <div className={`${inverted ? "bg-zinc-800 text-white border border-transparent" : "bg-white text-zinc-800 border border-[#00489c]/10"} max-w-7xl mx-auto text-sm backdrop-blur shadow-lg rounded-3xl px-4 sm:px-10 h-16 md:h-20 w-full flex items-center justify-between box-border ease-out transition-colors duration-500`}>
        <div className="flex items-center gap-10 ">
            <Link href="/" className="flex items-center justify-center relative w-28 md:w-32 h-12 flex-shrink-0">
                <Logo color={inverted ? '#fff' : '#00489c'} className="transition-colors duration-500 ease-out" />
            </Link>
            <div className="hidden sm:flex gap-5 items-center">
                <LinkItem href="#">Services</LinkItem>
                <LinkItem href="#">Portfolio</LinkItem>
                <LinkItem href="#">Contact</LinkItem>
            </div>
        </div>

        <div className="hidden md:flex gap-10 items-center">
          <div className="flex gap-5 items-center">
            <LinkItem href="https://support.paradane.com/hc/faq/en/categories/legal">Legal</LinkItem>
            <LinkItem href="#"><BookerModal label="Schedule" /></LinkItem>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden rounded-lg transition"
        >
          {!menuOpen && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-7 w-7 ${inverted ? "text-white" : "text-zinc-800"} transition-colors duration-500 ease-out`}
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
              className={`h-7 w-7 ${inverted ? "text-white" : "text-zinc-800"} transition-colors duration-500 ease-out`}
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
        <div className={`${inverted ? "bg-zinc-800 text-white border-white" : "bg-white text-zinc-800 border-zinc-200"} md:hidden mt-2 rounded-2xl shadow-lg p-5 space-y-4 text-sm max-w-7xl mx-auto`}>
          <LinkItem href="#">Services</LinkItem>
          <LinkItem href="#">Portfolio</LinkItem>
          <LinkItem href="#">Contact</LinkItem>
          <div className="border-t border-current pt-4 space-y-4">
            <LinkItem href="https://support.paradane.com/hc/faq/en/categories/legal">Legal</LinkItem>
            <LinkItem href="#"><BookerModal /></LinkItem>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
