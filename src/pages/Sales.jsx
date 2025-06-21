// import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDownRight, CreditCard, DollarSign, TrendingUp, TrendingDown } from "lucide-react";

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
  const Icon = direction === "up" ? ArrowUpRight : ArrowDownRight;
  const colorMap = {
    green: "text-green-600",
    blue: "text-blue-600",
    red: "text-red-600",
    yellow: "text-yellow-600",
  };

  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
      <p className="text-xl font-semibold text-gray-800">{value}</p>
      <p className={`text-xs flex items-center gap-1 ${colorMap[color]}`}>
        <Icon className="w-4 h-4" /> {change} this week
      </p>
    </div>
  );
};

const transactions = [
  { id: "TXN001", name: "Shubham Kumar", method: "Credit Card", amount: "$399", status: "Completed", date: "2025-06-20" },
  { id: "TXN002", name: "Riya Mehta", method: "PayPal", amount: "$249", status: "Pending", date: "2025-06-19" },
  { id: "TXN003", name: "Aman Verma", method: "UPI", amount: "$120", status: "Failed", date: "2025-06-18" },
  { id: "TXN004", name: "Neha Joshi", method: "Credit Card", amount: "$899", status: "Completed", date: "2025-06-17" },
  { id: "TXN005", name: "Karan Rawat", method: "Debit Card", amount: "$139", status: "Refunded", date: "2025-06-16" },
];

const StatusBadge = ({ status }) => {
  const statusMap = {
    Completed: "bg-green-100 text-green-800",
    Pending: "bg-yellow-100 text-yellow-800",
    Failed: "bg-red-100 text-red-800",
    Refunded: "bg-blue-100 text-blue-800",
  };
  return (
    <span className={`px-2 py-1 text-xs font-semibold rounded ${statusMap[status] || "bg-gray-200 text-gray-800"}`}>
      {status}
    </span>
  );
};

const Sales = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <section className="bg-white p-6 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Sales Overview</h2>
          <span className="text-sm text-gray-500">Last 7 days</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {salesData.map((item, idx) => (
            <SalesCard key={idx} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-white p-6 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Recent Transactions</h2>
          <span className="text-sm text-gray-500">Updated just now</span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left font-semibold">Transaction ID</th>
                <th className="py-2 px-4 text-left font-semibold">Customer</th>
                <th className="py-2 px-4 text-left font-semibold">Method</th>
                <th className="py-2 px-4 text-left font-semibold">Amount</th>
                <th className="py-2 px-4 text-left font-semibold">Status</th>
                <th className="py-2 px-4 text-left font-semibold">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {transactions.map((txn, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="py-2 px-4">{txn.id}</td>
                  <td className="py-2 px-4">{txn.name}</td>
                  <td className="py-2 px-4">{txn.method}</td>
                  <td className="py-2 px-4">{txn.amount}</td>
                  <td className="py-2 px-4"><StatusBadge status={txn.status} /></td>
                  <td className="py-2 px-4">{txn.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Sales;