import { useState } from "react";

// Dummy data
const orders = [
  {
    id: "#ORD001",
    customer: "Shubham Kumar",
    product: "iPhone 15 Pro",
    quantity: 1,
    amount: "$1,199",
    status: "Delivered",
    date: "2025-06-20",
  },
  {
    id: "#ORD002",
    customer: "Priya Sharma",
    product: "Sony WH-1000XM5",
    quantity: 2,
    amount: "$798",
    status: "Pending",
    date: "2025-06-19",
  },
  {
    id: "#ORD003",
    customer: "Rahul Verma",
    product: "Dell XPS 13",
    quantity: 1,
    amount: "$1,299",
    status: "Cancelled",
    date: "2025-06-18",
  },
  {
    id: "#ORD004",
    customer: "Anjali Singh",
    product: "Nike Air Max",
    quantity: 3,
    amount: "$540",
    status: "Delivered",
    date: "2025-06-17",
  },
  {
    id: "#ORD005",
    customer: "Vikash Mehra",
    product: "Samsung Galaxy S24",
    quantity: 1,
    amount: "$999",
    status: "Shipped",
    date: "2025-06-16",
  },
  {
    id: "#ORD006",
    customer: "Sneha Patil",
    product: "Logitech MX Master 3S",
    quantity: 2,
    amount: "$200",
    status: "Delivered",
    date: "2025-06-15",
  },
  {
    id: "#ORD007",
    customer: "Amit Choudhary",
    product: "Apple Watch Series 9",
    quantity: 1,
    amount: "$429",
    status: "Pending",
    date: "2025-06-14",
  },
  {
    id: "#ORD008",
    customer: "Ishita Rao",
    product: "JBL Flip 6",
    quantity: 1,
    amount: "$129",
    status: "Delivered",
    date: "2025-06-13",
  },
  {
    id: "#ORD009",
    customer: "Manish Tiwari",
    product: "Google Pixel 8",
    quantity: 1,
    amount: "$899",
    status: "Cancelled",
    date: "2025-06-12",
  },
  {
    id: "#ORD010",
    customer: "Neha Kakkar",
    product: "Canon EOS R10",
    quantity: 1,
    amount: "$1,099",
    status: "Delivered",
    date: "2025-06-11",
  },
  {
    id: "#ORD011",
    customer: "Rohit Sen",
    product: "LG 4K Smart TV",
    quantity: 1,
    amount: "$1,599",
    status: "Shipped",
    date: "2025-06-10",
  },
  {
    id: "#ORD012",
    customer: "Divya Mehta",
    product: "MacBook Air M2",
    quantity: 1,
    amount: "$1,299",
    status: "Pending",
    date: "2025-06-09",
  },
  {
    id: "#ORD013",
    customer: "Siddharth Das",
    product: "PlayStation 5",
    quantity: 1,
    amount: "$499",
    status: "Delivered",
    date: "2025-06-08",
  },
  {
    id: "#ORD014",
    customer: "Riya Jain",
    product: "HP Pavilion 15",
    quantity: 1,
    amount: "$699",
    status: "Cancelled",
    date: "2025-06-07",
  },
  {
    id: "#ORD015",
    customer: "Nikhil Malhotra",
    product: "Beats Studio Buds",
    quantity: 2,
    amount: "$298",
    status: "Delivered",
    date: "2025-06-06",
  },
  {
    id: "#ORD016",
    customer: "Pooja Rawat",
    product: "Samsung Galaxy Watch 6",
    quantity: 1,
    amount: "$399",
    status: "Pending",
    date: "2025-06-05",
  },
  {
    id: "#ORD017",
    customer: "Karan Joshi",
    product: "Kindle Paperwhite",
    quantity: 1,
    amount: "$149",
    status: "Delivered",
    date: "2025-06-04",
  },
  {
    id: "#ORD018",
    customer: "Meera Rathi",
    product: "Mi Power Bank 20000mAh",
    quantity: 2,
    amount: "$70",
    status: "Delivered",
    date: "2025-06-03",
  },
  {
    id: "#ORD019",
    customer: "Tushar Saini",
    product: "OnePlus Nord CE 4",
    quantity: 1,
    amount: "$399",
    status: "Shipped",
    date: "2025-06-02",
  },
  {
    id: "#ORD020",
    customer: "Aarushi Chauhan",
    product: "Asus ROG Strix G16",
    quantity: 1,
    amount: "$1,799",
    status: "Delivered",
    date: "2025-06-01",
  },
];


const StatusBadge = ({ status }) => {
  const base = "px-2 py-1 text-xs font-medium rounded-full";
  const styles = {
    Delivered: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Cancelled: "bg-red-100 text-red-700",
    Shipped: "bg-blue-100 text-blue-700",
  };
  return <span className={`${base} ${styles[status] || "bg-gray-200 text-gray-600"}`}>{status}</span>;
};

const Orders = () => {
  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Orders</h2>
          <span className="text-sm text-gray-500">{orders.length} total orders</span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-2 px-4 font-semibold">Order ID</th>
                <th className="py-2 px-4 font-semibold">Customer</th>
                <th className="py-2 px-4 font-semibold">Product</th>
                <th className="py-2 px-4 font-semibold">Qty</th>
                <th className="py-2 px-4 font-semibold">Amount</th>
                <th className="py-2 px-4 font-semibold">Status</th>
                <th className="py-2 px-4 font-semibold">Date</th>
                <th className="py-2 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {orders.map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="py-2 px-4">{order.id}</td>
                  <td className="py-2 px-4">{order.customer}</td>
                  <td className="py-2 px-4">{order.product}</td>
                  <td className="py-2 px-4">{order.quantity}</td>
                  <td className="py-2 px-4">{order.amount}</td>
                  <td className="py-2 px-4">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="py-2 px-4">{order.date}</td>
                  <td className="py-2 px-4">
                    <button className="text-blue-600 hover:underline mr-2">View</button>
                    <button className="text-red-600 hover:underline">Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Orders;
