import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Workouts", href: "/workouts" },
  { name: "Nutrition", href: "/nutrition" },
  { name: "Progress", href: "/progress" },
  { name: "AI Trainer", href: "/trainer" },
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
        "fixed top-0 w-full z-50 transition-all duration-300 bg-primary/80",
        isScrolled ? "bg-bg-primary/60 backdrop-blur-sm shadow-xs py-4" : "py-2"
      )}
    >
      <div className="grid grid-cols-3 pt-2 justify-between items-center container mx-auto">
        {/* Left side of Navbar (branding)*/}
        <div className="flex justify-start items-center">
          <a href="/" className="ml-16">
            <img src="/PumpAI_Text.png" className="w-32 h-10"></img>
          </a>
        </div>

        {/* Center of Navbar (navlinks) DESKTOP ONLY */}
        <div className="hidden md:flex justify-center items-center shadow-sm rounded-full gap-12 py-2 mx-auto whitespace-nowrap">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="rounded-full hover:text-brand link-hover"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right side of Navbar (profile)*/}
        <div className="flex justify-end items-center space-x-4 mr-10">
          <img
            src="/PumpAI_Circle.png"
            alt="Profile Image"
            className="rounded-full shadow-xl h-12 w-12"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
