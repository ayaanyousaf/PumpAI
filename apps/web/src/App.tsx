import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Navbar from "./components/Navbar.tsx"; 

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 flex flex-col">   {/* Root wrapper */}
      <Navbar />

      <main className="flex-1">       {/* Main content, routes to other pages */}
        <div>
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