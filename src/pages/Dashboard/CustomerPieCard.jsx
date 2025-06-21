import { PieChart, Pie, Legend, ResponsiveContainer, Tooltip, Cell } from "recharts";

const pieData = [
  { name: "Current", value: 400 },
  { name: "New", value: 300 },
  { name: "Retargeted", value: 300 },
];

const COLORS = ["#3b82f6", "#22c55e", "#f59e0b"]; // Blue, Green, Amber

export const CustomerPieCard = () => (
  <div className="bg-white p-4  rounded shadow col-span-2">
    <div className="flex justify-between items-center mb-4 ">
      <h3 className="text-lg font-semibold ">Customer Overview</h3>
      <span className="text-xs text-gray-400">01 Jan 2024 - 31 Dec 2024</span>
    </div>

    <ResponsiveContainer width="100%" height={230}>
      <PieChart>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={70}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </ResponsiveContainer>
  </div>
);
