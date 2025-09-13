import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", href: "#dashboard" },
  { name: "Workouts", href: "#workouts" },
  { name: "Nutrition", href: "#nutrition" },
  { name: "Progress", href: "#progress" },
  { name: "AI Trainer", href: "#trainer" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 bg-primary/80",
        isScrolled ? "bg-primary/40 backdrop-blur-sm shadow-xs py-3 " : "py-4"
      )}
    >
      <div className="flex justify-between items-center container mx-auto">
        {/* Left side of Navbar (branding)*/}
        <div className="flex-1 flex justify-start items-center">
          <a href="#landing" className="ml-6">
            <img src="/PumpAI_Text.png" className="w-36 h-12"></img>
          </a>
        </div>

        {/* Center of Navbar (navlinks) DESKTOP ONLY */}
        <div className="hidden md:flex items-center rounded-full px-4 py-2 bg-gray-900/50 space-x-8 mx-auto">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="bg-gray-900 h-7 px-2 shadow-lg rounded-full hover:text-blue-400 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right side of Navbar (profile)*/}
        <div className="flex-1 flex justify-end items-center space-x-4 mr-4">
          Profile
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
