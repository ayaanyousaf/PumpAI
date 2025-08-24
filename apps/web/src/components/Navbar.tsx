import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
    const activeLink = ({ isActive }: {isActive:boolean}) => /* Pre-defined class for active link styling */
        isActive
            ? "text-blue-600 font-semibold"
            : "text-gray-600 hover:text-gray-900"; 

    return (
      <header className="border-b">
        <div className="w-full px-4 py-3 flex items-center justify-between">
          <span className="font-extrabold tracking-tight">PumpAI</span>
          
          <nav className="flex-1 flex justify-center items-center gap-4 text-lg">
            <NavLink to="/" className={activeLink}>
              Dashboard         {/* NavLink for the Dashboard page */}
            </NavLink>
            <NavLink to="/login" className={activeLink}>
              Login             {/* NavLink for the Login page */}
            </NavLink>
          </nav>

          <div className="justify-self-end"> 
            <DarkModeToggle />
          </div>
        </div>
      </header>
    )
}

export default Navbar; 