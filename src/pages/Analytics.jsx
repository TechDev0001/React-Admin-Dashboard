import React, { Suspense, lazy } from 'react';

const ResponsiveContainer = lazy(() => import('recharts').then(m => ({ default: m.ResponsiveContainer })));
const LineChart = lazy(() => import('recharts').then(m => ({ default: m.LineChart })));
const Line = lazy(() => import('recharts').then(m => ({ default: m.Line })));
const CartesianGrid = lazy(() => import('recharts').then(m => ({ default: m.CartesianGrid })));
const XAxis = lazy(() => import('recharts').then(m => ({ default: m.XAxis })));
const YAxis = lazy(() => import('recharts').then(m => ({ default: m.YAxis })));
const Tooltip = lazy(() => import('recharts').then(m => ({ default: m.Tooltip })));
const Legend = lazy(() => import('recharts').then(m => ({ default: m.Legend })));
const PieChart = lazy(() => import('recharts').then(m => ({ default: m.PieChart })));
const Pie = lazy(() => import('recharts').then(m => ({ default: m.Pie })));
const Cell = lazy(() => import('recharts').then(m => ({ default: m.Cell })));

const TrendingUp = lazy(() => import('lucide-react').then(m => ({ default: m.TrendingUp })));
const Eye = lazy(() => import('lucide-react').then(m => ({ default: m.Eye })));
const Activity = lazy(() => import('lucide-react').then(m => ({ default: m.Activity })));
const Users = lazy(() => import('lucide-react').then(m => ({ default: m.Users })));

const trafficData = [
  { month: "Jan", visitors: 4000, sales: 2400 },
  { month: "Feb", visitors: 3000, sales: 2210 },
  { month: "Mar", visitors: 5000, sales: 2290 },
  { month: "Apr", visitors: 4780, sales: 2000 },
  { month: "May", visitors: 5890, sales: 2780 },
  { month: "Jun", visitors: 6390, sales: 3200 },
  { month: "Jul", visitors: 7490, sales: 4000 },
];

const deviceData = [
  { name: "Mobile", value: 68 },
  { name: "Desktop", value: 24 },
  { name: "Tablet", value: 8 },
];

const COLORS = ["#34D399", "#60A5FA", "#FBBF24"];

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Website KPIs</h2>
        <Suspense fallback={<div>Loading KPIs...</div>}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <TrendingUp className="text-green-600" />, label: "Conversion Rate", value: "8.7%" },
              { icon: <Eye className="text-blue-600" />, label: "Page Views", value: "45,210" },
              { icon: <Activity className="text-yellow-600" />, label: "Bounce Rate", value: "34%" },
              { icon: <Users className="text-purple-600" />, label: "Returning Visitors", value: "62%" },
            ].map((card, index) => (
              <div key={index} className="bg-white border rounded-lg p-4 shadow-sm flex items-center space-x-3">
                <div className="p-2 bg-gray-100 rounded-full">
                  {card.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500">{card.label}</p>
                  <p className="text-lg font-semibold text-gray-800">{card.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Suspense>
      </section>

      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Visitors vs Sales</h2>
        <Suspense fallback={<div>Loading Chart...</div>}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="visitors" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Suspense>
      </section>

      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">User Device Distribution</h2>
        <div className="w-full flex justify-center">
          <Suspense fallback={<div>Loading Pie Chart...</div>}>
            <ResponsiveContainer width="50%" height={250}>
              <PieChart>
                <Pie data={deviceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default Analytics;
