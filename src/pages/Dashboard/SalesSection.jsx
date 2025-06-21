const salesData = [
  {
    title: "Total Orders",
    value: "1,325",
    change: "+12.5%",
    direction: "up",
    color: "green",
  },
  {
    title: "Customers",
    value: "846",
    change: "+8.3%",
    direction: "up",
    color: "blue",
  },
  {
    title: "Profit",
    value: "$12,430",
    change: "+4.7%",
    direction: "up",
    color: "green",
  },
  {
    title: "Returned Orders",
    value: "32",
    change: "-1.1%",
    direction: "down",
    color: "red",
  },
  {
    title: "Successful Orders",
    value: "1,214",
    change: "+9.2%",
    direction: "up",
    color: "green",
  },
  {
    title: "Pending Orders",
    value: "79",
    change: "-3.4%",
    direction: "down",
    color: "yellow",
  },
];

const SalesCard = ({ title, value, change, direction, color }) => {
  const arrow = direction === "up" ? "▲" : "▼";
  const colorMap = {
    green: "text-green-600",
    blue: "text-blue-600",
    red: "text-red-600",
    yellow: "text-yellow-600",
  };

  return (
    <div className="bg-white  border rounded-lg p-4 shadow-sm w-full">
      <h3 className="text-sm sm:text-base text-gray-500 mb-1">{title}</h3>
      <p className="text-xl sm:text-2xl font-semibold text-gray-800">{value}</p>
      <p className={`text-xs sm:text-sm ${colorMap[color]} mt-1`}>
        {arrow} {change} this week
      </p>
    </div>
  );
};

export const SalesSection = () => (
  <section className="w-full col-span-1 border ">
    <div className="bg-white p-4 sm:p-6 rounded shadow">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
        <h2 className="text-lg sm:text-xl font-bold">Sales Overview</h2>
        <span className="text-sm text-gray-500">Last 7 days</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {salesData.map((item, idx) => (
          <SalesCard key={idx} {...item} />
        ))}
      </div>
    </div>
  </section>
);
