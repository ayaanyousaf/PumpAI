import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Dumbbell,
  Apple,
  BarChart3,
  Brain,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Workouts", icon: Dumbbell, path: "/workouts" },
  { name: "Nutrition", icon: Apple, path: "/nutrition" },
  { name: "Progress", icon: BarChart3, path: "/progress" },
  { name: "AI Trainer", icon: Brain, path: "/trainer" },
];

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const { logout } = useAuth();
  const { theme } = useTheme();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen border-r border-neutral-800 flex flex-col bg-neutral-900 text-gray-300 z-50 transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo / Collapse toggle */}
      <div className="flex items-center justify-between p-4 border-b border-neutral-800">
        <a href="/dashboard" className="flex items-center gap-2">
          {theme === "dark" ? (
            <img
              src="/PumpAI_Text.png"
              alt="PumpAI logo"
              className={cn("transition-all", collapsed ? "hidden" : "w-32")}
            />
          ) : (
            <img
              src="/PumpAI_Dark.png"
              alt="PumpAI logo"
              className={cn("transition-all", collapsed ? "hidden" : "w-32")}
            />
          )}
        </a>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white p-1 cursor-pointer"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 mt-4 space-y-1">
        {navItems.map(({ name, icon: Icon, path }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200",
                isActive
                  ? "bg-green-500/20 text-green-400"
                  : "hover:bg-neutral-800 hover:text-white"
              )
            }
          >
            <Icon className="w-5 h-5 shrink-0" />
            {!collapsed && <span>{name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 border-t border-neutral-800 mt-auto">
        <button
          onClick={logout}
          className="flex items-center w-full text-gray-400 hover:text-red-400 text-sm font-medium"
        >
          <div className="flex gap-3 cursor-pointer">
            <LogOut className="w-5 h-5 shrink-0" />
            {!collapsed && <span>Log out</span>}
          </div>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
