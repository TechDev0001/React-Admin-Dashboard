import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const metrics = [
  { title: "Conversion Rate", value: "82.8%", change: "+3.2%" },
  { title: "Bounce Rate", value: "38%", change: "-1.4%" },
  { title: "Avg. Session Time", value: "5m 20s", change: "+0.8s" },
  { title: "Page Views", value: "18,450", change: "+12%" },
];

const chartData = [
  { day: "Mon", views: 2300 },
  { day: "Tue", views: 2600 },
  { day: "Wed", views: 2800 },
  { day: "Thu", views: 3000 },
  { day: "Fri", views: 2700 },
  { day: "Sat", views: 2500 },
  { day: "Sun", views: 3200 },
];

const MetricCard = ({ title, value, change }) => (
  <div className="bg-white border rounded-lg p-4 shadow-sm">
    <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
    <p className="text-xl font-semibold text-gray-800">{value}</p>
    <p className={`text-xs ${change.includes("+") ? "text-green-500" : "text-red-500"}`}>
      {change.includes("+") ? "▲" : "▼"} {change} this week
    </p>
  </div>
);

export const AnalyticsSection = () => (
  <section className="bg-white p-6 rounded shadow">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold">Analytics Overview</h2>
      <span className="text-sm text-gray-500">Last 7 Days</span>
    </div>

    {/* Metric Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>

    {/* Page Views Chart */}
    <div className="bg-gray-50 border rounded-lg p-4">
      <h3 className="text-sm font-medium mb-4 text-gray-600">Page Views Trend</h3>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={chartData}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="views"
            stroke="#3b82f6"
            fill="#93c5fd"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </section>
);
