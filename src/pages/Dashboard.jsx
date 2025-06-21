import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
  Legend
} from "recharts";
import { Search, Settings, Bell } from "lucide-react";
import { Messages } from "./Dashboard/Messages";
import { UserSection } from "./Dashboard/UserSection";
import { ProductsSection } from "./Dashboard/ProductsSection";
import { AnalyticsSection } from "./Dashboard/AnalyticsSection";
import { NotificationsSection } from "./Dashboard/NotificationsSection";
import { SalesSection } from "./Dashboard/SalesSection";
import { PerformanceOverviewCard } from "./Dashboard/PerformanceOverviewCard";
import { CustomerPieCard } from "./Dashboard/CustomerPieCard";

const barData = [
  { name: "Jan", income: 3000, growth: 2.3 },
  { name: "Feb", income: 4000, growth: 3.1 },
  { name: "Mar", income: 5000, growth: 4 },
  { name: "Apr", income: 10000, growth: 10.1 },
  { name: "May", income: 8000, growth: 4.1 },
  { name: "Jun", income: 7000, growth: 3.6 },
  { name: "Jul", income: 6000, growth: 3.2 },
  { name: "Aug", income: 5000, growth: 2.3 },
  { name: "Sep", income: 4000, growth: 1.4 },
  { name: "Oct", income: 3000, growth: 0.8 },
  { name: "Nov", income: 2000, growth: 0.5 },
  { name: "Dec", income: 1500, growth: 0.2 },
];

const areaData = [
  { name: "Mon", users: 400 },
  { name: "Tue", users: 300 },
  { name: "Wed", users: 500 },
  { name: "Thu", users: 200 },
  { name: "Fri", users: 600 },
  { name: "Sat", users: 100 },
  { name: "Sun", users: 700 },
];

const Dashboard = () => {
  const Card = ({ title, value }) => (
    <div className="bg-gray-100 rounded p-4 shadow text-center">
      <p className="text-gray-500">{title}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Top Bar */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-semibold">Good Morning, James!</h1>
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <input
            className="border px-3 py-1 rounded-lg w-full sm:w-auto"
            placeholder="Search here..."
          />
          <Settings className="text-gray-500" />
          <Bell className="text-gray-500" />
        </div>
      </header>

      {/* Grid Content */}
      <main className="p-4 sm:p-6 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Cards */}
        <div className="bg-white p-4 rounded shadow w-full">
          <p className="text-gray-500 text-sm sm:text-base">Total Revenue</p>
          <h2 className="text-2xl sm:text-3xl font-semibold mt-1">$8365.00</h2>
          <p className="text-sm sm:text-base text-green-600 mt-1">+8.5% This Month</p>

          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded w-full sm:w-auto sm:self-start hover:bg-green-600 transition-all duration-200">
            View Report
          </button>
        </div>


        {/* Total Users Card */}
<div className="bg-white p-4 rounded shadow w-full">
  <p className="text-gray-500 text-sm sm:text-base">Total Users</p>
  <h2 className="text-2xl sm:text-3xl font-semibold mt-1">1,236</h2>
  <p className="text-sm sm:text-base text-blue-600 mt-1">+3.2% from last week</p>
</div>

{/* Total Products Card */}
<div className="bg-white p-4 rounded shadow w-full">
  <p className="text-gray-500 text-sm sm:text-base">Total Products</p>
  <h2 className="text-2xl sm:text-3xl font-semibold mt-1">142</h2>
  <p className="text-sm sm:text-base text-purple-600 mt-1">+12 New this week</p>
</div>

{/* Total Orders Card */}
<div className="bg-white p-4 rounded shadow w-full">
  <p className="text-gray-500 text-sm sm:text-base">Total Orders</p>
  <h2 className="text-2xl sm:text-3xl font-semibold mt-1">568</h2>
  <p className="text-sm sm:text-base text-red-600 mt-1">-2.1% Drop</p>
</div>


        {/* Bar Chart */}
        <div className="bg-white p-4 rounded shadow w-full col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">Monthly Avg. Income</h3>
          <div className="w-full overflow-x-auto">
            <div className="min-w-[400px] h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="income">
                    {barData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === 3 ? "#22c55e" : "#a3a3a3"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>


        {/* Area Chart */}
        <div className="bg-white p-4 rounded shadow w-full col-span-2">
  <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center sm:text-left">
    User Activity (Weekly)
  </h3>

  <div className="w-full overflow-x-auto">
    <div className="min-w-[400px] h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={areaData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="users"
            stroke="#0ea5e9"
            fill="#bae6fd"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>


        {/* Pie Chart Section */}
        <CustomerPieCard />

        {/* Performance Card */}
        <PerformanceOverviewCard />

        {/* Sections */}
        <div className="col-span-2 md:col-span-3 xl:col-span-4 space-y-10">
          <SalesSection />
          <UserSection />
          <ProductsSection />
          <AnalyticsSection />
          <Messages />
          <NotificationsSection />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
