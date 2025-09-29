import React from "react";

function Dashboard() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-[Poppins] font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Overall Summary */}
        <div className="bg-bg-secondary p-6 font-[Poppins] rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <p>Previous workout: Text here</p>
          <p>Next workout: Text here</p>
          <p>Week streak: Text here</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
