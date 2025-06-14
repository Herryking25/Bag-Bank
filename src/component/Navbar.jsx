import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import bagLogo from "../assets/image/bagLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Courses", id: "courses" },
    { label: "Demo", id: "demo" },
    { label: "Contact us", id: "contact" },
  ];

  const linkStyle = (id) =>
    `hover:underline ${
      activeSection === id ? "text-green-300 font-semibold" : ""
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-green-900 text-white shadow-md">
      <div className="max-w-8xl mx-auto md:mx-14 flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <img src={bagLogo} alt="Bag icon" className="w-6" />
          BAG BANK
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={linkStyle(link.id)}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <X onClick={() => setIsOpen(false)} className="w-6 h-6 cursor-pointer" />
          ) : (
            <Menu onClick={() => setIsOpen(true)} className="w-6 h-6 cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-4 px-6 pb-4 text-sm bg-green-900">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className={`block ${linkStyle(link.id)}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
