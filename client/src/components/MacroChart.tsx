import { Cell, PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

function MacroChart() {
  const macroData = [
    { name: "Protein", value: 90, color: "#00FF28" },
    { name: "Carbs", value: 200, color: "#0056B4" },
    { name: "Fats", value: 70, color: "#AD5900" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
      <div className="w-48 h-48">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={macroData}
              dataKey="value"
              outerRadius={80}
              stroke="#1A1A1A"
              strokeWidth={3}
            >
              {macroData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3 text-lg">
        {macroData.map((m) => (
          <div
            key={m.name}
            className="flex justify-between gap-4 w-40"
            style={{ color: m.color }}
          >
            <span className="font-medium">{m.name}</span>
            <span className="text-gray-400">{m.value}g</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MacroChart;
