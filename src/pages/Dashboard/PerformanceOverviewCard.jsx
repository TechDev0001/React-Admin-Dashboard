const performanceMetrics = [
  { label: "Click Rate", value: "78%", color: "text-blue-600" },
  { label: "Session Duration", value: "5m 40s", color: "text-gray-800" },
  { label: "Customer Retention", value: "84%", color: "text-green-600" },
  { label: "Bounce Rate", value: "32%", color: "text-red-600" },
];

export const PerformanceOverviewCard = () => (
  <div className="bg-white p-4 rounded shadow col-span-2">
    <div className="flex justify-between items-center mb-3">
      <h3 className="text-lg font-semibold">Performance Overview</h3>
      <span className="text-xs text-gray-400">Updated 1 hour ago</span>
    </div>
    <ul className="divide-y">
      {performanceMetrics.map((item, idx) => (
        <li key={idx} className="flex justify-between py-2">
          <span className="text-sm text-gray-600">{item.label}</span>
          <span className={`font-semibold ${item.color}`}>{item.value}</span>
        </li>
      ))}
    </ul>
  </div>
);
