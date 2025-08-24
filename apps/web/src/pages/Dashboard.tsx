import { useState, useEffect } from "react";

function Dashboard() {
  return (
      <div className="min-h-screen w-full bg-freeze-purple dark:bg-dark-purple flex flex-col">
        <header className="p-6 items-center">
          <span className="font-brandFont text-6xl text-dark-purple dark:text-medium-purple">
            Pump
            <span className="text-purple-pain dark:text-purple-500">AI</span>
          </span>
        </header>
        <div className="p-6 items-center justify-center">
          <h1 className="text-center text-dark-purple dark:text-freeze-purple font-titleFont text-8xl">
            Dashboard
          </h1>
          <p className="text-center text-dark-purple dark:text-freeze-purple font-bodyFont text-3xl py-10">
              Welcome to PumpAI — your personal fitness companion.<br></br>
              Track your workouts, monitor nutrition, and visualize your progress all in one place.<br></br> 
              Helping you work smarter and harder. 
          </p>
        </div>
      </div> // Root wrapper for page
  )
}

export default Dashboard; 
  