import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../context/AuthContext";

const loggedOutItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Features", href: "#features" },
];

const loggedInItems = [
  { name: "Home", href: "/dashboard" },
  { name: "Workouts", href: "/workouts" },
  { name: "Nutrition", href: "/nutrition" },
  { name: "Progress", href: "/progress" },
  { name: "AI Trainer", href: "/trainer" },
];

function Navbar() {
  const { isAuth, logout } = useAuth(); // use custom react hook for auth state
  const [isScrolled, setIsScrolled] = useState(false);

  const theme = localStorage.getItem("theme");

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
        isScrolled ? "bg-bg-primary/60 backdrop-blur-lg shadow-xs py-3" : "py-2"
      )}
    >
      <div className="grid grid-cols-3 pt-2 justify-between items-center container mx-auto">
        {/* Left side of Navbar (branding)*/}
        <div className="flex justify-start items-center">
          <a href="/" className="ml-16">
            {theme === "dark" ? (
              <img src="/PumpAI_Text.png" className="w-32 h-10" />
            ) : (
              <img src="/PumpAI_Dark.png" className="w-32 h-10" />
            )}
          </a>
        </div>

        {/* Center of Navbar (navlinks) DESKTOP ONLY */}
        <div className="hidden md:flex justify-center items-center gap-12 py-2 mx-auto whitespace-nowrap">
          {(isAuth ? loggedInItems : loggedOutItems).map((item, key) => (
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
          {isAuth ? (
            <>
              <img
                src="/PumpAI_Circle.png"
                alt="Profile Image"
                className="rounded-full shadow-xl h-12 w-12"
              />
              <button
                onClick={logout}
                className="transparent-button py-2 cursor-pointer"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <a href="/register" className="brand-button py-2">
                Sign up
              </a>
              <a href="/login" className="transparent-button py-2">
                Log in
              </a>
            </>
          )}

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
