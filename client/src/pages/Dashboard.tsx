import { Cell, PieChart, Pie, ResponsiveContainer } from "recharts";

function Dashboard() {
  const macroData = [
    { name: "Protein", value: 90, color: "#00FF28" },
    { name: "Carbs", value: 200, color: "#0056B4" },
    { name: "Fats", value: 70, color: "#AD5900" },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Last Workout */}
        <div className="bg-bg-secondary p-6 font-[Poppins] rounded-xl shadow card-hover">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Last Workout
          </h2>
          <p className="mb-2">Chest Day</p>
          <ul className="list-disc ml-6 text-sm">
            <li>Incline Dumbbell Press — 4 x 8</li>
            <li>Chest Press Machine — 3 x 8</li>
            <li>Chest Fly Machine — 3 x 8</li>
          </ul>
        </div>

        {/* Next Workout */}
        <div className="bg-bg-secondary p-6 font-[Poppins] rounded-xl shadow card-hover">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Next Workout
          </h2>
          <p className="mb-2">Back Day</p>
          <ul className="list-disc ml-6 text-sm">
            <li>Lat Pulldown — 4 x 8</li>
            <li>Cable Rows — 3 x 8</li>
            <li>Pullovers — 3 x 12</li>
          </ul>
        </div>

        {/* Streak */}
        <div className="bg-bg-secondary p-6 font-[Poppins] rounded-xl shadow card-hover">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Current Streak
          </h2>
          <p className="text-center text-2xl">0 months, 2 weeks, 4 days</p>
        </div>

        {/* Daily Macros */}
        <div className="bg-bg-secondary p-6 font-[Poppins] rounded-xl shadow card-hover col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Daily Macros
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Macro Pie Chart */}
            <div className="w-64 h-64">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={macroData} dataKey="value" outerRadius={80} label>
                    {macroData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3 text-lg">
              {macroData.map((m) => (
                <div key={m.name} className="flex justify-between gap-4 w-40">
                  <span className="font-medium">{m.name}</span>
                  <span className="text-gray-400">{m.value}g</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Calorie Tracker */}
        <div className="bg-bg-secondary p-6 font-[Poppins] rounded-xl shadow card-hover">
          <h2 className="text-xl font-semibold mb-4 text-center">Calories</h2>
          <p className="text-center text-4xl">2160 kCal</p>
        </div>

        {/* Water Intake */}
        <div className="bg-bg-secondary p-6 font-[Poppins] rounded-xl shadow card-hover">
          <h2 className="text-xl font-semibold mb-4 text-center">Water</h2>
          <p className="text-center text-4xl">2.5 / 3 L</p>
        </div>

        {/* Sleep */}
        <div className="bg-bg-secondary p-6 font-[Poppins] rounded-xl shadow card-hover">
          <h2 className="text-xl font-semibold mb-4 text-center">Sleep</h2>
          <p className="text-center text-4xl">7 hours</p>
        </div>

        {/* Badges */}
        <div className="bg-bg-secondary p-6 font-[Poppins] rounded-xl shadow card-hover">
          <h2 className="text-xl font-semibold mb-4 text-center">Badges</h2>
          <p className="text-center text-2xl">Achievements here</p>
        </div>

        {/* AI Insights */}
        <div className="bg-bg-secondary p-6 font-[Poppins] rounded-xl shadow card-hover col-span-1 md:col-span-3">
          <h2 className="text-xl font-semibold mb-4 text-center">
            AI Insights
          </h2>
          <p className="text-center text-sm">
            Your AI trainer will provide recommendations here based on your
            workouts and nutrition data.
          </p>
        </div>

        {/* Daily Quote */}
        <div className="bg-bg-secondary p-6 font-[Poppins] rounded-xl shadow card-hover col-span-1 md:col-span-3">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Quote of the Day
          </h2>
          <p className="text-center text-sm">
            "Today I will do what others won't, so tomorrow I can accomplish
            what others can't."
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
