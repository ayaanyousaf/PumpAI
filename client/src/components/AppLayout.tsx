import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header>
        {/* Navbar content */}
        <Navbar />
      </header>

      {/* Main page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      <footer>
        {/* Footer content */}
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;
