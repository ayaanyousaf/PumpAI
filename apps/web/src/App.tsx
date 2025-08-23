import { Routes, Route, NavLink } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">   {/* Root wrapper */}
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto w-full px-4 py-3 flex items-center gap-6">
          <span className="font-extrabold tracking-tight">PumpAI</span>
          <nav className="flex items-center gap-4 text-sm">
            <NavLink      /* NavLink for the Dashboard page */
              to="/" 
              className={({isActive}) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }
            >
              Dashboard
            </NavLink>
            <NavLink      /* NavLink for the Login page */
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }
            >
              Login
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1">       {/* Main content, routes to other pages */}
        <div className="max-w-5xl mx-auto w-full px-4 py-6">
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-5xl mx-auto w-full px-4 py-3 text-xs text-gray-500">
          © {new Date().getFullYear()} PumpAI
        </div>
      </footer>
    </div>
  );
}