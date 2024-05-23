"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { href: "/", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="w-full fixed flex justify-center p-5 bg-transparent">
        <nav
          className={`flex gap-10 py-5 px-10 rounded-full transition-all duration-300 ${
            isScrolled ? "bg-blur" : "bg-transparent"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={` ${
                pathname === link.href
                  ? "text-sky-400 font-poppins"
                  : "text-white hover:text-slate-300 font-poppins"
              } `}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
